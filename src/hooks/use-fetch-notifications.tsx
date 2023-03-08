import React from 'react';
import { Notification } from '../models/notification';
import { Url } from '../util/url';

export function useFetchNotifications() {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);

  React.useEffect(() => {
    fetch(Url('data.json'))
      .then((res) => res.json())
      .then((data: Notification[]) => setNotifications(data));
  }, []);

  return notifications;
}
