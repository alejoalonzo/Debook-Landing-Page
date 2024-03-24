import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  jumpTo(section: any): void {
    const element = document.getElementById(section);
    if (element) {
      const offset = 200; // 200px offset, becouse de navbar has 150px
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        behavior: 'smooth',
        top: elementPosition
      });
    }
  }

  navigateToSections(section: string): void {
    this.jumpTo(section);
  }
}
