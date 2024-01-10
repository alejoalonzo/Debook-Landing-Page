import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarrouselPrivilegesComponent } from '../../components/carrousel-privileges/carrousel-privileges.component';

@Component({
  selector: 'app-one-book-one-community',
  standalone: true,
  imports: [ButtonModule, CarrouselPrivilegesComponent],
  templateUrl: './one-book-one-community.component.html',
  styleUrl: './one-book-one-community.component.scss'
})
export class OneBookOneCommunityComponent {
  videoSource: string = '/assets/images/FINAL.mp4';

}
