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

  ngOnInit() {
    this.comments = [
      {
        id: 1,
        text: 'This is the first comment!',
        author: 'User1',
        likes: 0,
        dislikes: 0,
        replies: [],
        showReplies: false,
        showReplyBox: false,
      },
      {
        id: 2,
        text: 'This is the second comment!',
        author: 'User2',
        likes: 0,
        dislikes: 0,
        replies: [],
        showReplies: false,
        showReplyBox: false,
      },
    ];
  }

  likeComment(comment: Comment) {
    comment.likes += 1;
  }

  dislikeComment(comment: Comment) {
    comment.dislikes += 1;
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
        likes: 0,
        dislikes: 0,
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
