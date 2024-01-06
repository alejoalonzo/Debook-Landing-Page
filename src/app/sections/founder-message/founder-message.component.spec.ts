import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderMessageComponent } from './founder-message.component';

describe('FounderMessageComponent', () => {
  let component: FounderMessageComponent;
  let fixture: ComponentFixture<FounderMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FounderMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FounderMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
