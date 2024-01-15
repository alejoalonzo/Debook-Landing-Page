import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, CardComponent, ProgressBarComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
