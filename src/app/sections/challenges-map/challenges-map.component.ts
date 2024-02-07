import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-challenges-map',
  standalone: true,
  imports: [TranslateModule, ButtonModule],
  templateUrl: './challenges-map.component.html',
  styleUrl: './challenges-map.component.scss'
})
export class ChallengesMapComponent {

  currentLang!: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    console.log("current lang: " + this.currentLang);
  }
}
