import { store, ReactNotificationOptions } from 'react-notifications-component';

interface INotificationProps {
  type: ReactNotificationOptions['type'];
  message: string;
  container?: ReactNotificationOptions['container'];
  duration?: number;
}

class NotificationUtilC {
  addNotification = (options: ReactNotificationOptions) => {
    const { type, message, container, dismiss, slidingExit, ...rest } = options;

    store.addNotification({
      message: message,
      type: type,
      insert: 'top',
      container: container,
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        onScreen: true,
        showIcon: true,
        ...dismiss,
      },
      slidingExit: {
        duration: 100,
        timingFunction: 'linear',
        delay: 0,
        ...slidingExit,
      },
      ...rest,
    });
  };

  showNotif = (options: INotificationProps) => {
    const { type, message, container, duration } = options;

    this.addNotification({
      type: type,
      message: message,
      container: container || 'bottom-left',
      dismiss: {
        duration: duration || 5000,
      },
    });
  };

  showError = (errorMessage: string) => {
    this.showNotif({ type: 'danger', message: errorMessage });
  };

  showSuccess = (successMessage: string) => {
    this.showNotif({ type: 'success', message: successMessage });
  };
}

const NotificationUtil = new NotificationUtilC();
export default NotificationUtil;
