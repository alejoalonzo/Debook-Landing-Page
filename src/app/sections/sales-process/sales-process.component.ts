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

  private salesPhase: number = 1;
  // availableProduct$: Observable<number> = new Observable<number>();
  availableProduct: number = 0;

  constructor(private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    // this.salesPhase = this.dataSharingService.getSalesPhase();

    // this.availableProduct$ = this.dataSharingService.getAvailableCount();
    // this.availableProduct$.subscribe((availableCount: number) => {
      
    //   this.availableProduct = availableCount;
    // });
    
  }

  navigateToLink(): void {
    const externalLink = 'https://mint.debookmagickey.com/';
    window.open(externalLink, '_blank');
  }
}
