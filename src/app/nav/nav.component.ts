import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { LogoComponent } from '../components/logo/logo.component';



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
              LogoComponent
            ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{

    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'En', code: 'En' },
            { name: 'Es', code: 'Es' },
        ];
        this.selectedCity = this.cities.find(city => city.code === 'En');
    }
}
