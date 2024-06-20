import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-rate-me',
  standalone: true,
  imports: [FormsModule, RatingModule],
  templateUrl: './rate-me.component.html',
  styleUrls: ['./rate-me.component.css']
})
export class RateMeComponent {
  value!: number;
}
