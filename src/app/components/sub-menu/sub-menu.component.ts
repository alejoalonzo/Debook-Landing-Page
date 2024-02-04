import { Component, OnInit, inject } from '@angular/core';
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
export class SubMenuComponent implements OnInit{

  // soldProductCount: number = 0;
  // totalProductCount: number = 0;
  // availableProduct$: Observable<number> = new Observable<number>();
  // availableProduct: number = 0;

  availableProduct: any =[]

  // constructor(private dataSharingService: DataSharingService) { }
  private dataSharingService = inject(DataSharingService)

  ngOnInit(): void {
/*
    this.dataSharingService.getAvailableCount().subscribe({
      next: (availableProduct:any)=>{
        this.availableProduct = availableProduct;
        console.log('API Data:', availableProduct);
      }, 
      error: (error)=> console.log("error", error) 
    });*/

    // this.availableProduct$ = this.dataSharingService.getAvailableCount();
    // this.availableProduct$.subscribe((availableCount: number) => {
      
    //   this.availableProduct = availableCount;

      // console.log("availableCount: "+availableCount)
    // });

  }

  navigateToLink(): void {
    const externalLink = 'https://mint.debookmagickey.com/';
    window.open(externalLink, '_blank');
  }

}
