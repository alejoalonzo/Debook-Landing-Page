import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-what-is-debook',
  standalone: true,
  imports: [LogoComponent, TranslateModule],
  templateUrl: './what-is-debook.component.html',
  styleUrl: './what-is-debook.component.scss'
})
export class WhatIsDebookComponent {

}
