import { Component, Input } from '@angular/core';
import { product } from './trending-card.model';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from './mockData';

@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule, FormsModule],
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css'],
})
export class TrendingCardComponent {
  // ⚠️ warning ⚠️
  // Make sure to use 10 cards.
  // If you use < 10. It may cause problems.
  @Input() products: product[] = [];

  constructor() {
    // Example product data
    this.products = PRODUCTS;
  }
}
