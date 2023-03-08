import { Url } from '../../../util/url';
import { RedDot } from '../../red-dot';
import '../notifications-board-item.css';

interface LeftGroupNotificationProps {
  username: string;
  received: string;
  type: 'left';
  group: string;
  read: boolean;
  image: string;
}

export function LeftGroupNotification({ image, username, group, read, received }: LeftGroupNotificationProps) {
  return (
    <div className={`notifications-board-item ${read ? null : 'unread'}`}>
      <div className="avatar">
        <img alt="" src={Url(image)} />
      </div>
      <div className="content">
        <p>
          <span className="username">{username}</span> left the group <span className="group">{group}</span> {read ? null : <RedDot />}
        </p>
        <p className="received">{received}</p>
      </div>
    </div>
  );
}
