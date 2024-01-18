import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { LogoComponent } from '../components/logo/logo.component';

import { TranslateService } from '@ngx-translate/core';
import { SubMenuComponent } from '../components/sub-menu/sub-menu.component';



interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ 
              FormsModule, 
              DropdownModule, 
              LogoComponent,
              SubMenuComponent
            ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{

    @Output() languageChange = new EventEmitter<string>();

    cities: City[] = [];
    selectedCity: City | undefined;

    constructor(private translate: TranslateService) { }



    ngOnInit() {
        this.cities = [
            { name: 'En', code: 'en' },
            { name: 'Es', code: 'es' },
        ];

        
        const currentLang = this.translate.currentLang;
        this.selectedCity = this.cities.find(city => city.code === currentLang);
    }

    onLanguageChange() {
      this.languageChange.emit(this.selectedCity?.code || 'en');
    }

}

