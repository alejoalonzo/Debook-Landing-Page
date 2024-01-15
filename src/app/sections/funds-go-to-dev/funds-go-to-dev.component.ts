import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-funds-go-to-dev',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './funds-go-to-dev.component.html',
  styleUrl: './funds-go-to-dev.component.scss'
})
export class FundsGoToDevComponent {

}
