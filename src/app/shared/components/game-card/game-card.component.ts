import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game_card } from '../../../models/interfaces/game.interface';
@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule, FormsModule],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
    @Input() products: Game_card[]=[];

  ngOnInit(): void {
    this.products=[
      {
        trending: true,
        GameName: 'One Piece',
        image:
            'https://th.bing.com/th/id/OIP.B5OGCL5rhzpxy82rlyCcigHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: true,
        GameName: 'Attack on Titan',
        image:
            'https://th.bing.com/th/id/OIP.V8FUvm3Ju1IjsmP86uHlxAHaSP?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: true,
        GameName: 'Demon Slayer',
        image:
            'https://th.bing.com/th?id=OIP.7YLoz6rQMhutyz5cl-vJhQHaNH&w=187&h=332&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
      {
        trending: true,
        GameName: 'Naruto',
        image:
            'https://th.bing.com/th?id=OIP.g1abSRlvkbLygTdtFWvVnwHaNH&w=187&h=332&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
      {
        trending: true,
        GameName: 'Jujutsu Kaisen',
        image:
            'https://th.bing.com/th?id=OIP.ZKnv_7girsDo1w8Js6Id5AHaNP&w=187&h=334&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
      {
        trending: true,
        GameName: 'One Punch Man',
        image:
            'https://th.bing.com/th/id/OIP.Y7Tlb3tbY2iXwGzQiYMdIwHaO0?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: true,
        GameName: 'Dragon Ball Z',
        image:
            'https://th.bing.com/th/id/OIP.PTUUskrhrzLYeZBNigmhxwHaNK?w=116&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: true,
        GameName: 'My Hero Academia',
        image:
        'https://th.bing.com/th/id/OIP.s-EEwEKH5LhwsHeWBLCyfQHaLJ?w=122&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: true,
        GameName: 'Fairy Tail',
        image:
            'https://th.bing.com/th/id/OIP.naj1e230qNNqnq0l6G4kPwHaLB?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: true,
        GameName: 'Bleach',
        image:
            'https://th.bing.com/th/id/OIP.q7GsFzZjAckE_onjweQU-AHaHl?w=148&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: false,
        GameName: 'Sword Art Online',
        image:
            'https://th.bing.com/th/id/OIP.6uQZ6NHLYBeE4ERIBvriWgHaEo?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: false,
        GameName: 'Tokyo Ghoul',
        image:
            'https://th.bing.com/th/id/OIP.9z3FlhJaPeiH3ctYWY2x_AHaKn?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: false,
        GameName: 'Death Note',
        image:
            'https://th.bing.com/th/id/OIP.alcXIj_ShuBFIumG6TjxJgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
      {
        trending: false,
        GameName: 'Fullmetal Alchemist',
        image:
            'https://th.bing.com/th/id/OIP.RmmL2rLF3ygc1K2d8YmxuAHaLH?w=800&h=1200&rs=1&pid=ImgDetMain',
    },
    ];
}
}