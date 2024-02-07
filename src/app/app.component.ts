import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './sections/hero/hero.component';
import { BodyComponent } from './sections/body/body.component';
import { WhatIsDebookComponent } from './sections/what-is-debook/what-is-debook.component';
import { FounderMessageComponent } from './sections/founder-message/founder-message.component';
import { FundsGoToDevComponent } from './sections/funds-go-to-dev/funds-go-to-dev.component';
import { PanelsComponent } from './sections/panels/panels.component';
import { FaqsComponent } from './sections/faqs/faqs.component';
import { TeamComponent } from './sections/team/team.component';
import { FooterComponent } from './footer/footer.component';
import { BodyBottomComponent } from './sections/body-bottom/body-bottom.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CarrouselPrivilegesComponent } from './components/carrousels/carrousel-privileges/carrousel-privileges.component';
import { CarrouselWHYBoxComponent } from './components/carrousels/carrousel-why-box/carrousel-why-box.component';
import { TranslateService } from '@ngx-translate/core';
import { CarrouselCardsComponent } from './components/carrousels/carrousel-cards/carrousel-cards.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
              CommonModule, 
              RouterOutlet, 

              NavComponent, 
              HeroComponent, 
              BodyComponent, 
              WhatIsDebookComponent,
              FounderMessageComponent,
              FundsGoToDevComponent,
              PanelsComponent,
              FaqsComponent,
              TeamComponent,
              FooterComponent,
              BodyBottomComponent,
              ProgressBarComponent,
              CarrouselPrivilegesComponent,
              CarrouselWHYBoxComponent,
              CarrouselCardsComponent,
              SubMenuComponent
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'debook';
  // currentLanguage: string;

  constructor(private translate: TranslateService){
    // translate.setDefaultLang('en');
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
  }
  switchLang(lang: string){
    this.translate.use(lang)
  }

}
