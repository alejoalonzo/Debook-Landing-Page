import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  navigateToLink(): void {
    const externalLink = 'https://mint.debookmagickey.com/';
    window.open(externalLink, '_blank');
  }
}
