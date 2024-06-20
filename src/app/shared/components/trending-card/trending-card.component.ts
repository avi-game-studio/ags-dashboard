import { Component, Input, OnInit } from '@angular/core';
import { product } from './trending-card.model'; // Ensure this import is correct
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule, FormsModule],
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css'],
})
export class TrendingCardComponent implements OnInit {

  @Input() products: product[] = [];

  responsiveOptions: any[] | undefined;

  constructor() {
    // Example product data
    this.products = [
      {
        id: 1,
        GameName: 'One Piece',
        image:
        'https://th.bing.com/th/id/OIP.B5OGCL5rhzpxy82rlyCcigHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
      {
        id: 2,
        GameName: 'Attack on Titan',
        image:
        'https://th.bing.com/th/id/OIP.V8FUvm3Ju1IjsmP86uHlxAHaSP?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
      {
        id: 3,
        GameName: 'Demon Slayer',
        image:
          'https://th.bing.com/th?id=OIP.7YLoz6rQMhutyz5cl-vJhQHaNH&w=187&h=332&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      },
      {
        id: 4,
        GameName: 'Naruto ',
        image:
          'https://th.bing.com/th?id=OIP.g1abSRlvkbLygTdtFWvVnwHaNH&w=187&h=332&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      },
      {
        id: 5,
        GameName: 'Jujutsu Kaisen',
        image:
          'https://th.bing.com/th?id=OIP.ZKnv_7girsDo1w8Js6Id5AHaNP&w=187&h=334&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      },
      {
        id: 6,
        GameName: 'One punchman',
        image:
          'https://th.bing.com/th/id/OIP.Y7Tlb3tbY2iXwGzQiYMdIwHaO0?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      },
      {
        id: 7,
        GameName: 'Dragon ball z',
        image:
          'https://th.bing.com/th/id/OIP.PTUUskrhrzLYeZBNigmhxwHaNK?w=116&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      }
    ];
  }

  ngOnInit() {
    
    this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '1220px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '1100px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }
}
