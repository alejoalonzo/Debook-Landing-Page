import { Component } from '@angular/core';
import { CarrouselWHYBoxComponent } from '../../components/carrousel-why-box/carrousel-why-box.component';

@Component({
  selector: 'app-panels',
  standalone: true,
  imports: [CarrouselWHYBoxComponent],
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.scss'
})
export class PanelsComponent {

}
