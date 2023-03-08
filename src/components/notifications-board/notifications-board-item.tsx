import './notifications-board-item.css';
import { notification } from '../../models/notification';
import { PostReactionNotification } from './notifications-board-items/post-reaction-notification';
import { JoinGroupNotification } from './notifications-board-items/join-group-notification';
import { FollowYouNotification } from './notifications-board-items/follow-you-notification';
import { CommentPictureNotification } from './notifications-board-items/comment-picture-notification';
import { LeftGroupNotification } from './notifications-board-items/left-group-notification';
import { PrivateMessageNotification } from './notifications-board-items/private-message-notification';

interface NotificationItemProps {
  notification: notification;
}

export function NotificationsBoardItem({
  notification: { image, username, type, group, read, received, relatedImage, message },
}: NotificationItemProps) {
  const createContentByType = () => {
    switch (type) {
      case 'reacted':
        return (
          <>
            <PostReactionNotification username={username} received={received} type="reacted" group={group!} read={read} image={image} />{' '}
          </>
        );
      case 'joined':
        return (
          <>
            <JoinGroupNotification username={username} received={received} type="joined" group={group!} read={read} image={image} />{' '}
          </>
        );
      case 'followed':
        return (
          <>
            <FollowYouNotification username={username} received={received} type="follow" group={group!} read={read} image={image} />{' '}
          </>
        );
      case 'commented':
        return (
          <>
            <CommentPictureNotification username={username} received={received} type="commented" read={read} image={image} relatedImage={relatedImage!} />{' '}
          </>
        );
      case 'left':
        return (
          <>
            <LeftGroupNotification username={username} received={received} type="left" group={group!} read={read} image={image} />{' '}
          </>
        );
      case 'private message':
        return (
          <>
            <PrivateMessageNotification username={username} received={received} type="private message" read={read} image={image} message={message!} />{' '}
          </>
        );
      default:
        return <></>;
    }
  };

  return createContentByType();
}
