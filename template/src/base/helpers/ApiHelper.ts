import Notification from '../../utils/NotificationUtil';

export default class ApiHelper {
  static getApiErrors(error: any) {
    if (error?.message) {
      if (!Array.isArray(error?.errors) && error?.errors) {
        const errorsArray = Object.values(error?.errors);
        const errors = Array.prototype.concat.apply([], errorsArray);

        Notification.showError(errors.join('\n') || 'Unknown error');
      } else {
        Notification.showError(error?.message || 'Unknown error');
      }
    }
  }
}
