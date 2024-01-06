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
              FaqsComponent
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'debook';
}
