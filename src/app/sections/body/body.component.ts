import { Component } from '@angular/core';
import { WhatIsDebookComponent } from '../what-is-debook/what-is-debook.component';
import { OneBookOneCommunityComponent } from '../one-book-one-community/one-book-one-community.component';
import { CarrouselCardsComponent } from '../../components/carrousels/carrousel-cards/carrousel-cards.component';
import { MagicKeyIsForYouIfComponent } from '../magic-key-is-for-you-if/magic-key-is-for-you-if.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    WhatIsDebookComponent, 
    OneBookOneCommunityComponent, 
    CarrouselCardsComponent,
    MagicKeyIsForYouIfComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
