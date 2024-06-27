import { Component } from '@angular/core';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FeaturedArticlesComponent, ProductDetailsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  companyName: string;
  slogan: string;
  description: string;
  buttons: string[];
  constructor() {
    this.companyName = "Avi 👻 Game Studios";
    this.slogan = "Fun starts here!";
    this.description = `We provide IT solutions in a game-like manner, 
                        making every task fun and engaging. Dive into a
                        world where solving tech problems feels like play, 
                        and say goodbye to the usual frustrations.`;
    this.buttons = ['Product details', 'play our game 🎮'];
  }
}
