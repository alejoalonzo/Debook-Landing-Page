import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';
import { SAMPLE_USERS } from '../../models/SAMPLE_USERS';
import { SAMPLE_USERS_EN } from '../../models/SAMPLE_USERS';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private sampleUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.updateSampleUsers();
    });
    this.updateSampleUsers();
  }

  private updateSampleUsers(): void {
    this.sampleUsers.next(SAMPLE_USERS_EN);

    //-------------------------------WIP---------------------------------
    //for now the cards work only in English
    //-------------------------------------------------------------------

    
    /*
    const lang = this.translate.currentLang;
    if (lang === 'es') {
      this.sampleUsers.next(SAMPLE_USERS);
    }
    if (lang === 'en') {
      this.sampleUsers.next(SAMPLE_USERS_EN);
    }*/
  }

  getSampleUsers(): Observable<User[]> {
    return this.sampleUsers.asObservable();
  }
}
