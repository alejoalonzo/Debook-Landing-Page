import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-building-debook-in-public',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './building-debook-in-public.component.html',
  styleUrl: './building-debook-in-public.component.scss'
})
export class BuildingDebookInPublicComponent implements OnInit{
 
  currentLanguageOnBuildingDebook: string = 'es';
  externalLinkPathYouTube: string = 'https://www.youtube.com/@Debook_esp';
  linkedInLink: string = 'https://www.linkedin.com/in/ernestvinas/';


  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.getLangToLinks();
  }

  getLangToLinks(){
    this.translate.onLangChange.subscribe(() => {
      this.currentLanguageOnBuildingDebook = this.translate.currentLang;
      this.updateLink();

    });
  }

  updateLink() {
    if (this.currentLanguageOnBuildingDebook === 'es') {
      this.externalLinkPathYouTube = 'https://www.youtube.com/@Debook_esp';
    } else if (this.currentLanguageOnBuildingDebook === 'en') {
      this.externalLinkPathYouTube = 'https://www.youtube.com/@debook_eng'; 
    }
  }

  navigateToLinkYouTube(){
    const externalLinkYoutube = this.externalLinkPathYouTube;
    window.open(externalLinkYoutube, '_blank');
  }

  navigateToLinkLinkedIn(){
    const linkedInLink = this.linkedInLink;
    window.open(linkedInLink, '_blank');
  }

}
