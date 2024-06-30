import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../models/interfaces/carousel.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from '../../models/mock-data/carousel-mockData';
import { CarouselModule } from 'primeng/carousel';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ CommonModule, FormsModule,CarouselModule,RouterLink],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() products: product[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() sliderInterval = 3000; // Default to 3 seconds
 

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideProducts();
    }
  }

  autoSlideProducts(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.sliderInterval);
  }

  // Set index of image on dot / indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.products.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.products.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  constructor() {
    // Example product data
    this.products = PRODUCTS;
  }
}
