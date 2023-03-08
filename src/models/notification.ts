export interface Notification {
  username: string;
  received: string;
  type: 'reacted' | 'followed' | 'joined' | 'commented' | 'left' | 'private message';
  group?: string;
  message?: string;
  read: boolean;
  image: string;
  relatedImage?: string;
}
