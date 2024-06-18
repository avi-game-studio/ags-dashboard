export interface Comment {
  id: number;
  text: string;
  author: string;
  likes: number;
  dislikes: number;
  replies: Comment[];
  showReplies: boolean;
  showReplyBox: boolean;
}
