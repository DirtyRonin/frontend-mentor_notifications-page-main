import React from 'react';
import { Notification } from '../models/notification';

export function useFetchNotifications() {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);

  React.useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data: Notification[]) => setNotifications(data));
  }, []);

  return notifications;
}
