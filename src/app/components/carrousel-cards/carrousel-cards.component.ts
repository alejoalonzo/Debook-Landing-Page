import { CUSTOM_ELEMENTS_SCHEMA,  Component} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CardComponent } from '../card/card.component';
register();

@Component({
  selector: 'app-carrousel-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carrousel-cards.component.html',
  styleUrl: './carrousel-cards.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselCardsComponent {

}
