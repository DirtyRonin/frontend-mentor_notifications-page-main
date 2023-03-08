import { Url } from '../../../util/url';
import { RedDot } from '../../red-dot';
import '../notifications-board-item.css';

interface CommentPictureNotificationProps {
  username: string;
  received: string;
  type: 'commented';
  read: boolean;
  image: string;
  relatedImage: string;
}

export function CommentPictureNotification({ image, username, relatedImage, read, received }: CommentPictureNotificationProps) {
  return (
    <div className={`notifications-board-item ${read ? '' : 'unread'}`}>
      <div className="avatar">
        <img alt="" src={Url(image)} />
      </div>
      <div className="content">
        <p>
          <span className="username">{username}</span> commented on your picture {read ? null : <RedDot />}
        </p>
        <p className="received">{received}</p>
      </div>
      <div className="related-image">
        <img  alt="" src={Url(relatedImage)} />
      </div>
    </div>
  );
}
