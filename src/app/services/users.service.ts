import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';
import { SAMPLE_USERS } from '../../models/SAMPLE_USERS';
import { SAMPLE_USERS_EN } from '../../models/SAMPLE_USERS';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private sampleUsers: User[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.updateSampleUsers();
    });
    this.updateSampleUsers();
  }

  private updateSampleUsers(): void {
    const lang = this.translate.currentLang;
    this.sampleUsers = lang === 'es' ? SAMPLE_USERS : SAMPLE_USERS_EN;
  }

  getSampleUsers(): Observable<User[]> {
    return of(this.sampleUsers);
  }
}
