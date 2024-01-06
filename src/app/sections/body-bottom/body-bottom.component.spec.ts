import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBottomComponent } from './body-bottom.component';

describe('BodyBottomComponent', () => {
  let component: BodyBottomComponent;
  let fixture: ComponentFixture<BodyBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
