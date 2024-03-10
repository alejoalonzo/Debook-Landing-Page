import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { PopUpEmailRequestComponent } from '../../components/pop-up-email-request/pop-up-email-request.component';

@Component({
  selector: 'app-funds-go-to-dev',
  standalone: true,
  imports: [ButtonModule, TranslateModule, PopUpEmailRequestComponent],
  templateUrl: './funds-go-to-dev.component.html',
  styleUrl: './funds-go-to-dev.component.scss'
})
export class FundsGoToDevComponent {
    
  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  navigateToLink(): void {
    const externalLink = 'https://www.figma.com/proto/cLeWxki0oLVfHyu8t9emhJ/DEBOOK-APP-27-DE-ENERO?page-id=0%3A1&type=design&node-id=0-3980&viewport=-7297%2C10271%2C3.54&t=YYDS9fJwb0XnLB4p-1&scaling=min-zoom&mode=design';
    window.open(externalLink, '_blank');
  }

  navigateToSection(): void {
    const sectionId = 'oneBookOneCommunity'; 
    this.jumpTo(sectionId);
  }

  visible = false;


  showDialog() {
    this.visible = true;
  }
}
