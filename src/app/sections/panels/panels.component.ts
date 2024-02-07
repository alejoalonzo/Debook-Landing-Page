import { Component } from '@angular/core';
import { CarrouselWHYBoxComponent } from '../../components/carrousels/carrousel-why-box/carrousel-why-box.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-panels',
  standalone: true,
  imports: [CarrouselWHYBoxComponent, TranslateModule],
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.scss'
})
export class PanelsComponent {

}
