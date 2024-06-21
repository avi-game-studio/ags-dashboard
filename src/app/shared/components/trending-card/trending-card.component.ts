import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameDetailsService } from '../../../core/services/api/game-details.service';
import { Game } from '../../../models/interfaces/game.interface';
@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule, FormsModule],
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css'],
})
export class TrendingCardComponent implements OnInit {
  // ⚠️ warning ⚠️
  // Make sure to use 10 cards.
  // If you use < 10. It may cause problems.
  @Input() products: Game[];

  constructor(private gameDetailService: GameDetailsService) {
    // Example product data
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.gameDetailService.getTrendingGames();
  }
}
