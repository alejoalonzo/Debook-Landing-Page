import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: string = 'es';

  setCurrentLang(lang: string): void {
    this.currentLang = lang;
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
}
