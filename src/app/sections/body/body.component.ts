import { Component } from '@angular/core';
import { WhatIsDebookComponent } from '../what-is-debook/what-is-debook.component';
import { OneBookOneCommunityComponent } from '../one-book-one-community/one-book-one-community.component';
import { CarrouselCardsComponent } from '../../components/carrousels/carrousel-cards/carrousel-cards.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    WhatIsDebookComponent,
    OneBookOneCommunityComponent,
    CarrouselCardsComponent,
    TranslateModule,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
