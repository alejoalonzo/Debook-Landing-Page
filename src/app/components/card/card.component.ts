import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model'; 
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // providers: [UsersService]
})
export class CardComponent implements OnInit {
  @Input() numberOfCards: number = 9;

  sampleUsers: User[] = []; 

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    
    this.getSampleUsersList();
  }

  private getSampleUsersList() {
    this.usersService.getSampleUsers().subscribe(
      (users: User[]) => {
        this.sampleUsers = users;
      }
    );
  }
}

