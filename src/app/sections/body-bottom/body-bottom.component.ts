import { Component } from '@angular/core';
import { FundsGoToDevComponent } from '../funds-go-to-dev/funds-go-to-dev.component';
import { PanelsComponent } from '../panels/panels.component';
import { TeamComponent } from '../team/team.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { FooterComponent } from '../../footer/footer.component';
import { SalesProcessComponent } from '../sales-process/sales-process.component';
import { UnicornMansionComponent } from '../unicorn-mansion/unicorn-mansion.component';
import { BuildingDebookInPublicComponent } from '../building-debook-in-public/building-debook-in-public.component';
import { ChallengesMapComponent } from '../challenges-map/challenges-map.component';
import { QAMondaysComponent } from '../qa-mondays/qa-mondays.component';

@Component({
  selector: 'app-body-bottom',
  standalone: true,
  imports: [
            FundsGoToDevComponent,
            PanelsComponent,
            TeamComponent,
            FaqsComponent,
            FooterComponent,
            SalesProcessComponent,
            UnicornMansionComponent,
            BuildingDebookInPublicComponent,
            ChallengesMapComponent,
            QAMondaysComponent
            
          ],
  templateUrl: './body-bottom.component.html',
  styleUrl: './body-bottom.component.scss'
})
export class BodyBottomComponent {

}
