import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [AccordionModule, TranslateModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {}
