import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './sections/hero/hero.component';
import { BodyComponent } from './sections/body/body.component';
import { WhatIsDebookComponent } from './sections/what-is-debook/what-is-debook.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
              CommonModule, 
              RouterOutlet, 
              NavComponent, 
              HeroComponent, 
              BodyComponent, 
              WhatIsDebookComponent
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'debook';
}
