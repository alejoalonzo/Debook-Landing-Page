import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAMondaysComponent } from './qa-mondays.component';

describe('QAMondaysComponent', () => {
  let component: QAMondaysComponent;
  let fixture: ComponentFixture<QAMondaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QAMondaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QAMondaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
