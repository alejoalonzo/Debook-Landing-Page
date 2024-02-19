import { Component } from '@angular/core';
import { CarrouselIsForYouIfComponent } from '../../components/carrousels/carrousel-is-for-you-if/carrousel-is-for-you-if.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-magic-key-is-for-you-if',
  standalone: true,
  imports: [ CarrouselIsForYouIfComponent, TranslateModule],
  templateUrl: './magic-key-is-for-you-if.component.html',
  styleUrl: './magic-key-is-for-you-if.component.scss'
})
export class MagicKeyIsForYouIfComponent {

}
