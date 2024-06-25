import { Component } from '@angular/core';
import { CarouselComponent } from '../../features/carousel/carousel.component';
import { TrendingCardComponent } from '../../shared/components/trending-card/trending-card.component';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CarouselComponent, TrendingCardComponent, GameCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
