import { Component, ViewChild, ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-founder-message',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './founder-message.component.html',
  styleUrl: './founder-message.component.scss'
})
export class FounderMessageComponent {

  private hideTextElementRef!: ElementRef;
  private hideTextButtonElementRef!: ElementRef;
  private isTextVisible: boolean = false;

  @ViewChild('hideText', { static: true }) set hideText(elementRef: ElementRef) {
    this.hideTextElementRef = elementRef;
  }

  @ViewChild('hideTextButton', { static: true }) set hideTextButton(elementRef: ElementRef) {
    this.hideTextButtonElementRef = elementRef;
  }

  ngAfterViewInit() {
    this.hideTextButtonElementRef.nativeElement.addEventListener('click', () => this.toggleText());
  }

  toggleText() {
    this.hideTextElementRef.nativeElement.classList.toggle('show');
    this.isTextVisible = !this.isTextVisible;
    this.updateButtonText();
  }

  updateButtonText() {
    const buttonText = this.isTextVisible ? '...Read Less' : 'Read More...';
    this.hideTextButtonElementRef.nativeElement.textContent = buttonText;
  }

}
