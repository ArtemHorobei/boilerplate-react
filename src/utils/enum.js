createEnum.groupProto = {
  getByName(nameToFind) {
    if (!nameToFind) {
      return this.fallback;
    }

    return this.getList().find(({ name }) => name === nameToFind)
      || this.fallback;
  },
  getList() {
    return Object.values(this) || [];
  },
  getNamesList() {
    return this.getList().map(({ name }) => name);
  },
  getAsOptions() {
    return this.getList().map(({ name, displayName }) => ({
      value: name,
      text: displayName,
    }));
  },
  fallback: {
    name: 'unexpected_enum_item',
    displayName: 'Unexpected enum item',
  },
};

createEnum.itemProto = {
  toString() {
    return this.displayName;
  },
  toLocaleString() {
    return this.displayName;
  },
  toJSON() {
    return this.name;
  },
};

export function createEnum(itemsMap, {
  itemProto = {},
  groupProto = {},
  fallback,
  beforeFreeze = result => result,
} = {}) {
  const resultProto = Object.create(createEnum.groupProto);

  Object.assign(resultProto, groupProto);

  if (fallback) {
    Object.assign(resultProto, { fallback });
  }

  const result = Object.create(resultProto);

  Object.assign(result, getEnrichedItems(itemsMap));

  return Object.freeze(
    beforeFreeze(result),
  );

  function getEnrichedItems(items) {
    return Object.entries(items).reduce((
      accum,
      [alias, value],
    ) => {
      if (!value.name || !value.displayName) {
        throw Error('Enum item must have name and displayName');
      }

      const enrichedItemProto = Object.create(createEnum.itemProto);

      Object.assign(enrichedItemProto, itemProto);

      const item = Object.create(enrichedItemProto);

      Object.assign(item, value);

      return {
        ...accum,
        [alias]: item,
      };
    }, {});
  }
}
