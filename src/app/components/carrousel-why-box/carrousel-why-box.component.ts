import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TranslateModule } from '@ngx-translate/core';
// register Swiper custom elements
register();

@Component({
  selector: 'app-carrousel-why-box',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './carrousel-why-box.component.html',
  styleUrl: './carrousel-why-box.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselWHYBoxComponent {

}
