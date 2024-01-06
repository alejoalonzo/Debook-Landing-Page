import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsGoToDevComponent } from './funds-go-to-dev.component';

describe('FundsGoToDevComponent', () => {
  let component: FundsGoToDevComponent;
  let fixture: ComponentFixture<FundsGoToDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsGoToDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundsGoToDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
