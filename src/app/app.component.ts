import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from './shared/components/global-header/global-header.component';
import { GlobalFooterComponent } from './shared/components/global-footer/global-footer.component';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    CustomCurrencyPipe,
    CurrencyPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ags-dashboard';
  amount = 1000;
}
