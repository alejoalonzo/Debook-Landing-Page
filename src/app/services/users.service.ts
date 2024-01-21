import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';
import { SAMPLE_USERS } from '../../models/SAMPLE_USERS';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private sampleUsers: User[] = SAMPLE_USERS;

  getSampleUsers(): Observable<User[]> {
    return of(this.sampleUsers);
  }

}
