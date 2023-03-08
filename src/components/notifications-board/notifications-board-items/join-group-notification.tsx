import { RedDot } from '../../red-dot';
import '../notifications-board-item.css';

interface JoinGroupNotificationProps {
  username: string;
  received: string;
  type: 'joined';
  group: string;
  read: boolean;
  image: string;
}

export function JoinGroupNotification({ image, username, group, read, received }: JoinGroupNotificationProps) {
  return (
    <div className={`notifications-board-item ${read ? null : 'unread'}`}>
      <div className="avatar">
        <img alt="" src={image} />
      </div>
      <div className="content">
        <p>
          <span className="username">{username}</span> has joined your group <span className="group">{group}</span> {read ? null : <RedDot />}
        </p>
        <p className="received">{received}</p>
      </div>
    </div>
  );
}
