import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarrouselPrivilegesComponent } from '../../components/carrousels/carrousel-privileges/carrousel-privileges.component';
import { TranslateModule } from '@ngx-translate/core';
import { PopUpEmailRequestComponent } from '../../components/pop-up-email-request/pop-up-email-request.component';

@Component({
  selector: 'app-one-book-one-community',
  standalone: true,
  imports: [
    ButtonModule,
    CarrouselPrivilegesComponent,
    TranslateModule,
    PopUpEmailRequestComponent,
  ],
  templateUrl: './one-book-one-community.component.html',
  styleUrl: './one-book-one-community.component.scss',
})
export class OneBookOneCommunityComponent {
  videoSource: string = '/assets/images/FINAL.mp4';
  navigateToLink(): void {
    const externalLink =
      'https://drive.google.com/drive/u/0/folders/1hbPs_ijfqTc2na_6WVhn-HmeZR5-ybqF';
    window.open(externalLink, '_blank');
  }
}
