import './notifications-board-item.css';
import React from 'react';
import { notification } from '../../models/notification';
import { RedDot } from '../red-dot';

interface NotificationItemProps {
  notification: notification;
}

export function NotificationsBoardItem({ notification: { image, username, type, group, read, received, relatedImage, message } }: NotificationItemProps) {
  const createContentByType = () => {
    switch (type) {
      case 'reacted':
        return `reacted to your recent post`;
      case 'followed':
        return `followed you`;
      case 'joined':
        return `has joined your group`;
      case 'commented':
        return `commented on your picture`;
      case 'left':
        return `left the group`;
      case 'private message':
        return `sent you a private message`;
      default:
        return '';
    }
  };

  return (
    <div className="notifications-board-item">
      <div className="avatar">
        <img alt="" src={image} />
      </div>
      <div>
        <div className="content-with-image">
          <div className="content">
            <p>
              <span className="username">{username}</span> {createContentByType()} <span className="group">{group}</span> {read ? null : <RedDot />}
            </p>
            <p>{received}</p>
          </div>
          {relatedImage ? <img alt="" src={relatedImage} /> : null}
        </div>
        {message ? (
          <div style={{ cursor: 'pointer' }}>
            <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
