import { Url } from '../../../util/url';
import { RedDot } from '../../red-dot';
import '../notifications-board-item.css';

interface PostReactionNotificationProps {
  username: string;
  received: string;
  type: 'reacted';
  group: string;
  read: boolean;
  image: string;
}

export function PostReactionNotification({ image, username, group, read, received }: PostReactionNotificationProps) {
  return (
    <div className={`notifications-board-item ${read ? null : 'unread'}`}>
      <div className="avatar">
        <img alt="" src={Url(image)} />
      </div>
      <div className='content'>
        <p>
          <span className="username">{username}</span> reacted to your recent post <span className="group">{group}</span> {read ? null : <RedDot />}
        </p>
        <p className='received'>{received}</p>
      </div>
    </div>
  );
}
