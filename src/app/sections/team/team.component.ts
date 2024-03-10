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
  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }
  navigateToSection(): void {
    const sectionId = 'oneBookOneCommunity'; 
    this.jumpTo(sectionId);
  }
}
