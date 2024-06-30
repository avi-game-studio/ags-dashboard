import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-featured-articles',
  standalone: true,
  imports: [AvatarGroupModule, AvatarModule],
  templateUrl: './featured-articles.component.html',
  styleUrl: './featured-articles.component.css'
})
export class FeaturedArticlesComponent {

}
