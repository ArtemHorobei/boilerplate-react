import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from 'semantic-ui-react';

import FdsLoader from '../FdsLoader';

import cnNsp from './styles.module.scss';

const FdsModal = ({
  children,
  className,
  fdsLoading,
  onClose,
  fdsSidebar,
  ...props
}) => {
  const cn = classNames(className, cnNsp._root, {
    [cnNsp.__sidebar]: fdsSidebar,
  });

  return (
    <React.Fragment>
      <Modal
        {...props}
        className={cn}
        onClose={!fdsLoading ? onClose : () => {}}
      >
        {children}
        <FdsLoader
          fdsAsDimmer
          active={fdsLoading}
          fdsDimmerStyle={{
            borderRadius: '4px',
          }}
        />
      </Modal>

    </React.Fragment>
  );
};

FdsModal.propTypes = {
  fdsLoading: PropTypes.bool,
  fdsSidebar: PropTypes.bool,
  className: PropTypes.string,
};

FdsModal.defaultProps = {
  fdsLoading: false,
  fdsSidebar: false,
  className: null,
};

FdsModal.Content = ({
  className,
  ...props
}) => {
  const cn = classNames(className, cnNsp._contentRoot);

  return (
    <Modal.Content
      {...props}
      className={cn}
    />
  );
};

FdsModal.Content.propTypes = {
  className: PropTypes.string,
};

FdsModal.Content.defaultProps = {
  className: null,
};

FdsModal.Actions = ({
  className,
  ...props
}) => {
  const cn = classNames(className, cnNsp._actionsRoot);

  return (
    <Modal.Actions
      {...props}
      className={cn}
    />
  );
};

FdsModal.Actions.propTypes = {
  className: PropTypes.string,
};

FdsModal.Actions.defaultProps = {
  className: null,
};

export default FdsModal;
