import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-funds-go-to-dev',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './funds-go-to-dev.component.html',
  styleUrl: './funds-go-to-dev.component.scss'
})
export class FundsGoToDevComponent {
  navigateToLink(): void {
    const externalLink = 'https://www.figma.com/proto/yNBopIX5wlCK5EjJ7LFDHi/Debook---UI-Screens?page-id=396%3A2&type=design&node-id=473-334&viewport=160%2C865%2C0.51&t=m9oLYGfMRdUXL8Kt-1&scaling=scale-down&mode=design';
    window.open(externalLink, '_blank');
  }
}
