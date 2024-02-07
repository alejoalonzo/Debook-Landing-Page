import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-challenges-map',
  standalone: true,
  imports: [TranslateModule, ButtonModule],
  templateUrl: './challenges-map.component.html',
  styleUrl: './challenges-map.component.scss'
})
export class ChallengesMapComponent {

}
