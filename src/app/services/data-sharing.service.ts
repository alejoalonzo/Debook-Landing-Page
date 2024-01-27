import { Injectable } from '@angular/core';
import { Subject, Observable, map, of  } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private apiUrl = environment.apiUrl;
  private soldPercentageSource = new Subject<number>();

  soldPercentage$ = this.soldPercentageSource.asObservable();

  private totalProductCount: number = 0;
  private soldProductCount: number = 0;
  private salesPhase: number = 1;
  private phaseLevel: number = 0;

  constructor(private http: HttpClient) { }


  getApiData(): Observable<any> {
    let params = new HttpParams();
    return this.http.get<any>(this.apiUrl, { params: params })
      .pipe(
        map(apiData => {
          
          this.phaseLevel = apiData.phase;

          this.totalProductCount = apiData.maxAllowlistSupply + apiData.maxPublicSupply;

          if (apiData.maxAllowlistSupply + apiData.currentMinted == apiData.maxAllowlistSupply + apiData.maxPublicSupply) {
            this.soldProductCount = apiData.maxAllowlistSupply + apiData.maxPublicSupply;
          }
          else {
            this.soldProductCount = apiData.maxAllowlistSupply + apiData.currentMinted
          }
                    
          this.updateSalesPhase();

          return apiData;
        })
      );
  }
  
  getSoldPercentage(): number {
    console.log("Sold percentage: ", (this.soldProductCount / this.totalProductCount) * 100)
    return (this.soldProductCount / this.totalProductCount) * 100;
  }

  getSoldProductCount(): number {

    return this.soldProductCount;
  }

  // getAvailableProductCount(): number {
  //   const availableCount = this.totalProductCount - this.soldProductCount;
  //   return availableCount > 0 ? availableCount : 0;
  // }
  getAvailableCount(): Observable<number> {
    return this.getApiData()
      .pipe(
        map(apiData => {

          this.totalProductCount = apiData.maxAllowlistSupply + apiData.maxPublicSupply;

          if (apiData.maxAllowlistSupply + apiData.currentMinted == apiData.maxAllowlistSupply + apiData.maxPublicSupply) {
            this.soldProductCount = apiData.maxAllowlistSupply + apiData.maxPublicSupply;
          }
          else {
            this.soldProductCount = apiData.maxAllowlistSupply + apiData.currentMinted
          }

          // this.soldProductCount = apiData.maxAllowlistSupply;
  
          const availableCount = this.totalProductCount - this.soldProductCount;
  
          return availableCount > 0 ? availableCount : 0;
        })
      );
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
    this.salesPhase = this.phaseLevel + 1;
    // if (this.soldProductCount >= 1112 && this.soldProductCount < 2223) {
    //   this.salesPhase = 2;
    // } else if (this.soldProductCount >= 2223 && this.soldProductCount < 3334) {
    //   this.salesPhase = 3;
    // } else {
    //   this.salesPhase = 1;
    // }

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
