import { RedDot } from '../../red-dot';
import '../notifications-board-item.css';

interface FollowYouNotificationProps {
  username: string;
  received: string;
  type: 'follow';
  group: string;
  read: boolean;
  image: string;
}

export function FollowYouNotification({ image, username, group, read, received }: FollowYouNotificationProps) {
  return (
    <div className={`notifications-board-item ${read ? null : 'unread'}`}>
      <div className="avatar">
        <img alt="" src={image} />
      </div>
      <div className="content">
        <p>
          <span className="username">{username}</span> followed you
          <span className="group">{group}</span> {read ? null : <RedDot />}
        </p>
        <p className="received">{received}</p>
      </div>
    </div>
  );
}
