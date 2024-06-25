// Import necessary modules and components from Angular
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from '../../features/comments/comments.component';

// Component decorator to define metadata for the PlayGameComponent
@Component({
  selector: 'app-play-game', // The CSS selector used to insert this component into a template
  standalone: true, // Indicates that this is a standalone component
  imports: [CommonModule, FormsModule, CommentsComponent], // Modules and components to import
  templateUrl: './play-game.component.html', // The path to the component's template file
  styleUrls: ['./play-game.component.css'], // The path to the component's stylesheet
})
export class PlayGameComponent implements OnInit {
  // Exporting the component class and implementing OnInit interface
  // Array to store the levels of the game, with only the first level enabled initially
  levels: { enabled: boolean }[] = Array.from({ length: 24 }, (_, i) => ({
    enabled: i === 0,
  }));

  // Component's constructor function
  constructor() { }

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit() { }

  // Method to toggle the game area to full screen
  toggleGameAreaFullScreen() {
    const gameArea = document.querySelector('.game-area') as HTMLElement; // Select the game area element
    if (gameArea && !document.fullscreenElement) {
      // Check if game area exists and if no element is currently in full screen
      gameArea.requestFullscreen().catch((err) => {
        // Request full screen for the game area
        alert(
          // Alert the user in case of an error
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen(); // Exit full screen mode if already in full screen
    }
  }

  // Method to mark a level as completed and enable the next level
  completeLevel(level: number) {
    if (level < this.levels.length && this.levels[level].enabled) {
      // Check if the current level is valid and enabled
      if (level + 1 < this.levels.length) {
        // Check if the next level exists
        this.levels[level + 1].enabled = true; // Enable the next level
      }
    }
  }
}
