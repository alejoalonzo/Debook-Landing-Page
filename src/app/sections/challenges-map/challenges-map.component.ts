import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-challenges-map',
  standalone: true,
  imports: [TranslateModule, ButtonModule],
  templateUrl: './challenges-map.component.html',
  styleUrl: './challenges-map.component.scss'
})
export class ChallengesMapComponent implements OnInit{

  currentLanguageOnChallenges: string = '';
  imageUrl: string = 'assets/images/wholeTeamEs.png';
  externalLinkPath: string = 'https://debook.notion.site/CHALLENGES-MAP-557c82549c6843f39bc8bb1bd9e1a78a?pvs=4';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    // console.log("lang -> "+this.currentLanguageOnChallenges);

    this.translate.onLangChange.subscribe(() => {
      this.currentLanguageOnChallenges = this.translate.currentLang;
      this.updateImageUrlAndLink();
      // console.log("langSus -> "+this.currentLanguageOnChallenges);
    });
  }

  updateImageUrlAndLink() {
    if (this.currentLanguageOnChallenges === 'es') {
      this.imageUrl = 'assets/images/wholeTeamEs.png';
      this.externalLinkPath = 'https://debook.notion.site/CHALLENGES-MAP-557c82549c6843f39bc8bb1bd9e1a78a?pvs=4';
    } else if (this.currentLanguageOnChallenges === 'en') {
      this.imageUrl = 'assets/images/wholeTeamEn.png';
      this.externalLinkPath = 'https://debook.notion.site/CHALLENGES-MAP-4d34b87d8f2c40a99e0db68c379509df?pvs=4'; 
    }
  }

  navigateToLink(): void { 
    const externalLink = this.externalLinkPath;
    window.open(externalLink, '_blank');

  }
}
