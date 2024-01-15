import { CUSTOM_ELEMENTS_SCHEMA,  Component} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { TranslateModule } from '@ngx-translate/core';
// register Swiper custom elements
register();



@Component({
  selector: 'app-carrousel-privileges',
  standalone: true,
  imports: [TranslateModule 
    ],
  templateUrl: './carrousel-privileges.component.html',
  styleUrl: './carrousel-privileges.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class CarrouselPrivilegesComponent {


}
