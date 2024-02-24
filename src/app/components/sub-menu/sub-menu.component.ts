import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { ButtonModule } from 'primeng/button';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [ButtonModule, TranslateModule, ProgressBarComponent],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
})
export class SubMenuComponent {
  availableProduct: number = 0;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.dataSharingService.getApiData().subscribe((data) => {
      this.availableProduct = data.left;
    });
  }

  navigateToLink(): void {
    const externalLink = 'https://mint.debookmagickey.com/';
    window.open(externalLink, '_blank');
  }
}
