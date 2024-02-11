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

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {

    // console.log("lang -> "+this.currentLanguageOnChallenges);

    this.translate.onLangChange.subscribe(() => {
      this.currentLanguageOnChallenges = this.translate.currentLang;
      this.updateImageUrl();
      // console.log("langSus -> "+this.currentLanguageOnChallenges);

    });
  }

  updateImageUrl() {
    if (this.currentLanguageOnChallenges === 'es') {
      this.imageUrl = 'assets/images/wholeTeamEs.png';
    } else if (this.currentLanguageOnChallenges === 'en') {
      this.imageUrl = 'assets/images/wholeTeamEn.png';
    }
  }

  navigateToLink(): void {
    let externalLink: string;
    if (this.currentLanguageOnChallenges === 'es') {
      externalLink = 'https://debook.notion.site/CHALLENGES-MAP-557c82549c6843f39bc8bb1bd9e1a78a?pvs=4';
      console.log("externalLinkEs -> "+externalLink);
    } else {
        externalLink = 'https://debook.notion.site/CHALLENGES-MAP-4d34b87d8f2c40a99e0db68c379509df?pvs=4'; 
      console.log("externalLinkEn -> "+externalLink);
    } 
    window.open(externalLink, '_blank');
  }
}
