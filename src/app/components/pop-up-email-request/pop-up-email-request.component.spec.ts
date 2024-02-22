import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEmailRequestComponent } from './pop-up-email-request.component';

describe('PopUpEmailRequestComponent', () => {
  let component: PopUpEmailRequestComponent;
  let fixture: ComponentFixture<PopUpEmailRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpEmailRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpEmailRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
