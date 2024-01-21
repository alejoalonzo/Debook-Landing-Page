import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private soldPercentageSource = new Subject<number>();

  soldPercentage$ = this.soldPercentageSource.asObservable();

  private totalProductCount: number = 1111;
  private soldProductCount: number = 452;
  private salesPhase: number = 1;

  getSoldPercentage(): number {
    return (this.soldProductCount / this.totalProductCount) * 100;
  }

  getSoldProductCount(): number {

    return this.soldProductCount;
  }

  getSalesPhase(): number {
    return this.salesPhase;
  }

  updateSoldPercentage(newPercentage: number): void {
    this.soldPercentageSource.next(newPercentage);
  }

  // Function sell "magic key"
  sellMagicKey(count: number) {
    
    this.updateSalesPhase();

    this.checkAndResetValues();

    this.soldProductCount += count;
    if (this.soldProductCount > this.totalProductCount) {
      this.soldProductCount = this.totalProductCount;
    }
    const newPercentage = (this.soldProductCount / this.totalProductCount) * 100;
    this.soldPercentageSource.next(newPercentage);
  }

  private updateSalesPhase(): void {
    if (this.soldProductCount >= 1112 && this.soldProductCount < 2223) {
      this.salesPhase = 2;
    } else if (this.soldProductCount >= 2223 && this.soldProductCount < 3334) {
      this.salesPhase = 3;
    } else {
      this.salesPhase = 1;
    }

    console.log("phase= " + this.salesPhase);
  }

  private checkAndResetValues(): void {
    if (this.salesPhase === 2 || this.salesPhase === 3) {
      // Reset
      this.soldProductCount = 0; 
      this.updateSoldPercentage(0);
    }
  }
}
