import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-sales-process',
  standalone: true,
  imports: [ProgressBarComponent, ButtonModule, TranslateModule],
  templateUrl: './sales-process.component.html',
  styleUrl: './sales-process.component.scss',
  providers: [DataSharingService],
})
export class SalesProcessComponent {

  private salesPhase: number = 1;

  constructor(private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.salesPhase = this.dataSharingService.getSalesPhase();
    
  }

  navigateToLink(): void {
    const externalLink = 'https://debook-minting-backend.vercel.app/';
    window.open(externalLink, '_blank');
  }
}
