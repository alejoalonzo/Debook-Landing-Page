import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

  totalProductCount = 3333; // Total count of magic keys
  soldProductCount = 1222; // Count of sold magic keys

  get soldPercentage(): number {
    return (this.soldProductCount / this.totalProductCount) * 100;
  }

  // Function to simulate selling magic key
  sellMagicKey(count: number) {
    this.soldProductCount += count;
    if (this.soldProductCount > this.totalProductCount) {
      this.soldProductCount = this.totalProductCount;
    }
  }

}
