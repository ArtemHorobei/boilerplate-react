import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import cnNsp from './styles.module.scss';

class FdsFilepicker extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    acceptExtensions: PropTypes.arrayOf(PropTypes.string),
    trigger: PropTypes.node,
    onChange: PropTypes.func,
    onLoadingStart: PropTypes.func,
    onLoadingEnd: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    acceptExtensions: ['.jpg', '.png'],
    trigger: (<div>Pick the file</div>),
    value: '',
    onChange: () => {},
    onLoadingStart: () => {},
    onLoadingEnd: () => {},
  };

  pickerRef = null;

  componentDidUpdate(prevProps) {
    const {
      props: currProps,
    } = this;

    if (prevProps.value !== currProps.value) {
      if (currProps.value === '') this.pickerRef.value = '';
    }
  }

  handleFilePickerMounted = (ref) => {
    this.pickerRef = ref;
  };

  emitChange = (file) => {
    const { onChange } = this.props;

    onChange({ ...file || {} });
  };

  onFileChange = ({
    target: {
      files,
    },
  }) => {
    const [file] = Array.from(files);

    if (!file) {
      this.emitChange(null);
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);
    this.emitLoadingStart();

    reader.onload = () => {
      this.emitChange({
        base64: reader.result,
        name: file.name,
        size: file.size,
      });
    };
    this.emitLoadingEnd();
  };

  emitLoadingStart = () => {
    const { onLoadingStart } = this.props;

    onLoadingStart();
  };

  emitLoadingEnd = () => {
    const { onLoadingEnd } = this.props;

    onLoadingEnd();
  };

  render() {
    const {
      className,
      acceptExtensions,
      trigger,
    } = this.props;

    const cn = cns(className, cnNsp._root);

    const extensions = acceptExtensions.join(', ');
    return (
      <div className={cn}>
        <div className={cnNsp._trigger}>
          {trigger}
        </div>
        <input
          className={cnNsp._fileInput}
          type="file"
          accept={extensions}
          ref={this.handleFilePickerMounted}
          onChange={this.onFileChange}
        />
      </div>
    );
  }
}


export default FdsFilepicker;
