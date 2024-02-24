import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { CarrouselMansionComponent } from '../../components/carrousels/carrousel-mansion/carrousel-mansion.component';

@Component({
  selector: 'app-unicorn-mansion',
  standalone: true,
  imports: [ButtonModule, TranslateModule, CarrouselMansionComponent],
  templateUrl: './unicorn-mansion.component.html',
  styleUrl: './unicorn-mansion.component.scss',
})
export class UnicornMansionComponent {
  navigateToLink(): void {
    const externalLink = 'https://mint.debookmagickey.com/';
    window.open(externalLink, '_blank');
  }
}
