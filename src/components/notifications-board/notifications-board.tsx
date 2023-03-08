import React from 'react';
import { useFetchNotifications } from '../../hooks/use-fetch-notifications';
import { Notification } from '../../models/notification';
import { Badge } from '../badge';
import { NotificationsBoardItem } from './notifications-board-item';
import './notifications-board.css';

export function NotificationsBoard() {
  const [state, dispatch] = React.useState<Notification[]>();

  const notifications = useFetchNotifications();

  const getUnreadNotifications = () => notifications.filter((x) => !x.read).length;

  return (
    <div className="notifications-board-container">
      <div className="header">
        <div className="left-side">
          <h2>Notifications</h2>
          <Badge backgroundcolor="blue" count={getUnreadNotifications()} />
        </div>
        <div className="right-side">
          <button>Mark all as read</button>
        </div>
      </div>
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <NotificationsBoardItem key={`notification-item-${notification.image}-${index}`} notification={notification} />
        ))}
      </div>
    </div>
  );
}
