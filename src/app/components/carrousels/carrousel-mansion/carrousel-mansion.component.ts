import { CUSTOM_ELEMENTS_SCHEMA,  Component} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TranslateModule } from '@ngx-translate/core';
// register Swiper custom elements
register();

@Component({
  selector: 'app-carrousel-mansion',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './carrousel-mansion.component.html',
  styleUrl: './carrousel-mansion.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselMansionComponent {

}
