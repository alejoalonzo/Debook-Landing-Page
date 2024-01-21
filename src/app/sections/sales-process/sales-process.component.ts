import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sales-process',
  standalone: true,
  imports: [ProgressBarComponent, ButtonModule, TranslateModule],
  templateUrl: './sales-process.component.html',
  styleUrl: './sales-process.component.scss'
})
export class SalesProcessComponent {

}
