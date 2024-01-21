import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselMansionComponent } from './carrousel-mansion.component';

describe('CarrouselMansionComponent', () => {
  let component: CarrouselMansionComponent;
  let fixture: ComponentFixture<CarrouselMansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselMansionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselMansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
