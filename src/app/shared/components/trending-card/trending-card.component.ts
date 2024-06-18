import { Component, Input ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trending } from './trending-card.model';

@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.css'
})
export class TrendingCardComponent  implements OnInit  {
  @Input() trendings: trending[] = [];
  title:string='Trending:';
  ngOnInit() {
    this.trendings = [
      {
        id: 1,
        game_name:"one piece",
        imgURL:"https://i.pinimg.com/736x/65/92/39/6592392e1bbffb904ac76bd544dae3b8.jpg"
      },
      {
        id: 1,
        game_name:"one piece",
        imgURL:"https://i.pinimg.com/736x/65/92/39/6592392e1bbffb904ac76bd544dae3b8.jpg"
      },
      {
        id: 1,
        game_name:"one piece",
        imgURL:"https://i.pinimg.com/736x/65/92/39/6592392e1bbffb904ac76bd544dae3b8.jpg"
      },
      {
        id: 1,
        game_name:"one piece",
        imgURL:"https://i.pinimg.com/736x/65/92/39/6592392e1bbffb904ac76bd544dae3b8.jpg"
      }
    ];
  }
  
  
}
