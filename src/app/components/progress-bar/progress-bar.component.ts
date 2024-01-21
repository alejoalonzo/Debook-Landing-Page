import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  providers: [DataSharingService],
})
export class ProgressBarComponent implements OnInit{

  @Input() isWhiteBackground: boolean = false;
  @Input() showIcon: boolean = false;

  soldPercentage: number = 0;
  private salesPhase: number = 1;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.soldPercentage = this.dataSharingService.getSoldPercentage();
    this.dataSharingService.soldPercentage$.subscribe(newPercentage => {
      this.soldPercentage = newPercentage;
    });
    this.salesPhase = this.dataSharingService.getSalesPhase();
    
  }

}