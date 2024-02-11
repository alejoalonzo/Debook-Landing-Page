import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales-process',
  standalone: true,
  imports: [ProgressBarComponent, ButtonModule, TranslateModule],
  templateUrl: './sales-process.component.html',
  styleUrl: './sales-process.component.scss',
  providers: [DataSharingService],
})
export class SalesProcessComponent {
  availableProduct: number = 0;

  constructor(private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.dataSharingService.getApiData().subscribe(data => {
      this.availableProduct = data.left;
    });
  }
  

  navigateToLink(): void {
    const externalLink = 'https://mint.debookmagickey.com/';
    window.open(externalLink, '_blank');
  }
}
