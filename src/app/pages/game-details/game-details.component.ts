import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css'
})
export class GameDetailsComponent implements OnInit{
  gameId!: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('game-id');
      if (id !== null) {
        this.gameId = +id;
        // Fetch game details using this.gameId
      } else {
        // Handle the case where id is null
        console.error('Game ID is null');
        // You could redirect or show an error message here
      }
    });
  }
}
