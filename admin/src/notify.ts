import { Notify } from 'quasar';

type NotifyType = 'error' | 'pending' | 'success';

const notifyOptions: { [type in NotifyType]: { icon: string, color: string } } = {
  error: {
    icon: 'error',
    color: 'negative',
  },
  pending: {
    icon: 'pending',
    color: 'dark',
  },
  success: {
    icon: 'check_circle',
    color: 'positive',
  },
};

const notify = (type: NotifyType, message: string) => {
  Notify.create({
    message,
    timeout: 3000,
    badgeColor: 'primary',
    classes: 'no-shadow',
    ...notifyOptions[type],
  });
};

export default notify;
