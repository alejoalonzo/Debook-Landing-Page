import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-pop-up-email-request',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './pop-up-email-request.component.html',
  styleUrl: './pop-up-email-request.component.scss'
})
export class PopUpEmailRequestComponent {

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  showDialog() {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
