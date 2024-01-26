import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { Observable } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';


@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [ButtonModule, TranslateModule, ProgressBarComponent],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
  providers: [DataSharingService]
})
export class SubMenuComponent {

  soldProductCount: number = 0;
  totalProductCount: number = 0;
  availableProduct$: Observable<number> = new Observable<number>();
  availableProduct: number = 0;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {

  
    // this.soldProductCount = this.dataSharingService.getSoldProductCount();
    // this.availableProduct = this.dataSharingService.getAvailableProductCount();
    

    // Subscribe to the Observable to get updates
    this.availableProduct$.subscribe((availableCount: number) => {
      this.availableProduct = availableCount;
    });

    this.availableProduct$ = this.dataSharingService.getAvailableProductCount();

  }

  navigateToLink(): void {
    const externalLink = 'https://debook-minting-backend.vercel.app/';
    window.open(externalLink, '_blank');
  }

}
