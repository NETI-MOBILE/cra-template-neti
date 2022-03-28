import { store, ReactNotificationOptions } from 'react-notifications-component';

interface INotificationProps {
  type: ReactNotificationOptions['type'];
  message: string;
  container?: ReactNotificationOptions['container'];
  duration?: number;
}

export default class Notification {
  static addNotification = (options: ReactNotificationOptions) => {
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

  static showNotif = (options: INotificationProps) => {
    const { type, message, container, duration } = options;

    Notification.addNotification({
      type: type,
      message: message,
      container: container || 'bottom-left',
      dismiss: {
        duration: duration || 5000,
      },
    });
  };

  static showError = (errorMessage: string) => {
    Notification.showNotif({ type: 'danger', message: errorMessage });
  };

  static showSuccess = (successMessage: string) => {
    Notification.showNotif({ type: 'success', message: successMessage });
  };
}
