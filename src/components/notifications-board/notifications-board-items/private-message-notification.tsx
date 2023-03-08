import { RedDot } from '../../red-dot';
import '../notifications-board-item.css';

interface PrivateMessageNotificationProps {
  username: string;
  received: string;
  type: 'private message';
  message: string;
  read: boolean;
  image: string;
}

export function PrivateMessageNotification({ image, username, message, read, received }: PrivateMessageNotificationProps) {
  return (
    <div className={`notifications-board-item ${read ? null : 'unread'}`}>
      <div className="avatar">
        <img alt="" src={image} />
      </div>
      <div className="content">
        <p>
          <span className="username">{username}</span> sent you a private message {read ? null : <RedDot />}
        </p>
        <p className="received">{received}</p>
        <p className='private-message'>{message}</p>
      </div>
    </div>
  );
}
