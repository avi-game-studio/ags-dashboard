import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from './shared/components/global-header/global-header.component';
import { GlobalFooterComponent } from './shared/components/global-footer/global-footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GlobalHeaderComponent,
    GlobalFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ags-dashboard';
}
