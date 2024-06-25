import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];
  newReply: string = '';
  userId: string = 'unique-user-id'; // Replace with actual user ID in a real app

  ngOnInit() {
    this.comments = [
      {
        id: 1,
        text: 'This is the first comment!',
        author: 'User1',
        profilePicture:
          'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add path to profile picture
        likes: 0,
        dislikes: 0,
        likedBy: new Set<string>(),
        dislikedBy: new Set<string>(),
        replies: [],
        showReplies: false,
        showReplyBox: false,
      },
      {
        id: 2,
        text: 'This is the second comment!',
        author: 'User2',
        profilePicture:
          'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add path to profile picture
        likes: 0,
        dislikes: 0,
        likedBy: new Set<string>(),
        dislikedBy: new Set<string>(),
        replies: [],
        showReplies: false,
        showReplyBox: false,
      },
    ];
  }

  likeComment(comment: Comment) {
    if (!comment.likedBy.has(this.userId)) {
      if (comment.dislikedBy.has(this.userId)) {
        comment.dislikedBy.delete(this.userId);
        comment.dislikes -= 1;
      }
      comment.likedBy.add(this.userId);
      comment.likes += 1;
    } else {
      comment.likedBy.delete(this.userId);
      comment.likes -= 1;
    }
  }

  dislikeComment(comment: Comment) {
    if (!comment.dislikedBy.has(this.userId)) {
      if (comment.likedBy.has(this.userId)) {
        comment.likedBy.delete(this.userId);
        comment.likes -= 1;
      }
      comment.dislikedBy.add(this.userId);
      comment.dislikes += 1;
    } else {
      comment.dislikedBy.delete(this.userId);
      comment.dislikes -= 1;
    }
  }

  toggleReplyBox(comment: Comment) {
    comment.showReplyBox = !comment.showReplyBox;
  }

  toggleReplies(comment: Comment) {
    comment.showReplies = !comment.showReplies;
  }

  submitReply(comment: Comment) {
    if (this.newReply.trim()) {
      const reply: Comment = {
        id: Date.now(),
        text: this.newReply,
        author: 'You',
        profilePicture: 'path/to/your-profile-picture.jpg',
        likes: 0,
        dislikes: 0,
        likedBy: new Set<string>(),
        dislikedBy: new Set<string>(),
        replies: [],
        showReplies: false,
        showReplyBox: false,
      };
      comment.replies.push(reply);
      this.newReply = '';
      comment.showReplyBox = false;
    }
  }
}
