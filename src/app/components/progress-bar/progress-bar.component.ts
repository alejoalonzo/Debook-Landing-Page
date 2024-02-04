import { Component, OnInit, Input, inject } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';
import { HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  providers: [DataSharingService, ],
})
export class ProgressBarComponent implements OnInit{

  @Input() isWhiteBackground: boolean = false;
  @Input() showIcon: boolean = false;

  data: any =[]

  soldPercentage: number = 0;
  private salesPhase: number = 1;

  constructor(private dataSharingService: DataSharingService, ) {}
  // private dataSharingService = inject(DataSharingService)
  // private http = inject(HttpClient)

  ngOnInit() {
    /*
    this.dataSharingService.getApiData().subscribe({
      next: (data:any)=>{
        this.data = data;
        console.log('API Data:', data);
      }, 
      error: (error)=> console.log("error", error) 
    });*/
    // this.soldPercentage = this.dataSharingService.getSoldPercentage();
    // this.dataSharingService.soldPercentage$.subscribe(newPercentage => {
    //   this.soldPercentage = newPercentage;
    // });
    // this.salesPhase = this.dataSharingService.getSalesPhase();
    

    // this.fetchData()

  
    this.dataSharingService.getApiData().subscribe(
      response => {
        if (response) {
          // Use the properties directly without checking for response.data
          this.data = response;
          console.log('Received data:', this.data);
        } else {
          console.error('Response is undefined or null:', response);
        }
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );

  }


  
  
  // fetchData(){
  //   this.http.get("https://datieskca7hlzshr3hgso4vacu0yfscv.lambda-url.us-east-1.on.aws/").subscribe({
  //     next: (data:any)=>{
  //       this.data = data;
  //       console.log('API Data:', data);
  //     }, 
  //     error: (error)=> console.log("error", error) 
  //   });
  // }
}