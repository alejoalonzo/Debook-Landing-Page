import { CUSTOM_ELEMENTS_SCHEMA,  Component, OnInit} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CardComponent } from '../../card/card.component';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../../models/user.model';
import { CommonModule } from '@angular/common';
register();

@Component({
  selector: 'app-carrousel-cards',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './carrousel-cards.component.html',
  styleUrls: ['./carrousel-cards.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselCardsComponent implements OnInit{

  sampleUsers: User[] = []; 

  constructor(private usersService: UsersService) {}

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
