export interface Comment {
  id: number;
  text: string;
  author: string;
  profilePicture: string; // New property for profile picture URL
  likes: number;
  dislikes: number;
  likedBy: Set<string>;
  dislikedBy: Set<string>;
  replies: Comment[];
  showReplies: boolean;
  showReplyBox: boolean;
}
