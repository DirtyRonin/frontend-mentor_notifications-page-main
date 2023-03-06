import React from 'react';
import { Badge } from '../badge';
import './notifications-board.css';

export function NotificationsBoard() {
  return (
    <div className="notifications-board-container">
      <div className="header">
        <div className="left-side">
          <h2>Notifications</h2>
          <Badge backgroundcolor="blue" count={3} />
        </div>
        <div className="right-side">
          <button>Mark all as read</button>
        </div>
      </div>
    </div>
  );
}
