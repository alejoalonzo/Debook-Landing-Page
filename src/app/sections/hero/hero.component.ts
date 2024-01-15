import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { CarrouselCardsComponent } from '../../components/carrousel-cards/carrousel-cards.component';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonModule, 
    CardComponent, 
    ProgressBarComponent, 
    TranslateModule,
    CarrouselCardsComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
