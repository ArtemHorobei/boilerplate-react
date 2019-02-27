import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MghMessage from 'mgh-ui-kit/MghMessage';
import { capitalizeMessage, formatAsSentence } from '../../../utils';

import styles from './styles.module.scss';

const ToastMessage = ({ closeToast, ...props }) => (
  <MghMessage onDismiss={closeToast} {...props} />
);

export const showToastMessage = ({
  type,
  contentOnly,
  header,
  content,
}) => toast(
  <ToastMessage
    {...(
      contentOnly
        ? {}
        : {
          header: header || capitalizeMessage(type),
        }
    )}
    content={formatAsSentence(content)}
    {...({
      [type]: true,
    })}
  />,
);

const ToastMessagesContainer = () => (
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnVisibilityChange
    draggable
    pauseOnHover
    closeButton={false}
    toastClassName={styles._message}
    transition={Bounce}
  />
);

export default ToastMessagesContainer;
