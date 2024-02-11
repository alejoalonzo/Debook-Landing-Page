import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements OnInit{

  @Input() isWhiteBackground: boolean = false;
  @Input() showIcon: boolean = false;

  soldPercentage: number = 0;
  totalProductCount: number = 0;
  soldProductCount: number = 0;


  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.getSoldProductCount();
  }

  getSoldProductCount(){
    this.dataSharingService.getApiData().subscribe(data => {
      this.totalProductCount = data.maxAllowlistSupply + data.maxPublicSupply;
      if (data.maxAllowlistSupply + data.currentMinted == data.maxAllowlistSupply + data.maxPublicSupply) {
        this.soldProductCount = data.maxAllowlistSupply + data.maxPublicSupply;
        this.soldPercentage = (this.soldProductCount / this.totalProductCount) * 100;
      }
      else {
        this.soldProductCount = data.maxAllowlistSupply + data.currentMinted
        this.soldPercentage = (this.soldProductCount / this.totalProductCount) * 100;
      }
    });
    
  }

}

