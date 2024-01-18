import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private soldPercentageSource = new Subject<number>();

  soldPercentage$ = this.soldPercentageSource.asObservable();

  private totalProductCount: number = 1111;
  private soldProductCount: number = 250;

  getSoldPercentage(): number {
    return (this.soldProductCount / this.totalProductCount) * 100;
  }

  getSoldProductCount(): number {
    return this.soldProductCount;
  }

  updateSoldPercentage(newPercentage: number): void {
    this.soldPercentageSource.next(newPercentage);
  }

  // Function sell "magic key"
  sellMagicKey(count: number) {
    this.soldProductCount += count;
    if (this.soldProductCount > this.totalProductCount) {
      this.soldProductCount = this.totalProductCount;
    }
    const newPercentage = (this.soldProductCount / this.totalProductCount) * 100;
    this.soldPercentageSource.next(newPercentage);
  }
}
