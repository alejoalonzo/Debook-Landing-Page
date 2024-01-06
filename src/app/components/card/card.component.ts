import { Component, Input  } from '@angular/core';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../servises/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, HttpClientModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: [UsersService]
})
export class CardComponent {
  @Input() numberOfCards: number = 9;

  userName: string = 'randomUser';
  userData: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsersList(this.userName);
    // this.artistName = '';
  }

  private getUsersList(userName_: string){
    const usertName = userName_; 
    this.usersService.searchUsers(usertName).subscribe(
      (data: any) => {
        this.userData = data;
        // console.log(data); 
      }
    );
  }

}
