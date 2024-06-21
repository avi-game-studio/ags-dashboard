import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from '../../features/comments/comments.component';


@Component({
  selector: 'app-play-game',
  standalone: true,
  imports: [CommonModule, FormsModule, CommentsComponent],
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
})
export class PlayGameComponent implements OnInit {
  levels: boolean[] = Array(24).fill(false);

  constructor() {
    // Initially enable level 1
    this.levels[0] = true;
  }

  ngOnInit(): void {}

  toggleGameAreaFullScreen(): void {
    const gameArea = document.querySelector('.game-area') as HTMLElement;
    if (gameArea && !document.fullscreenElement) {
      gameArea.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

  completeLevel(level: number): void {
    if (level < this.levels.length) {
      this.levels[level] = true;
    }
  }
}