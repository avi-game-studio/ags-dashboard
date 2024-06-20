import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from './shared/components/global-header/global-header.component';
import { GlobalFooterComponent } from './shared/components/global-footer/global-footer.component';
import { CustomDatePipe } from './shared/pipes/custom-date-format.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    CustomDatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DatePipe]
})
export class AppComponent {
  title = 'ags-dashboard';
  currentDate = new Date();
}
