import React from 'react';
import { notification } from '../models/notification';

export function useFetchNotifications() {
  const [notifications, setNotifications] = React.useState<notification[]>([]);

  React.useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data: notification[]) => setNotifications(data));
  }, []);

  return notifications;
}
