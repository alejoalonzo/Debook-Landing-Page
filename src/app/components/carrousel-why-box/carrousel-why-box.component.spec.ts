import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselWHYBoxComponent } from './carrousel-why-box.component';

describe('CarrouselWHYBoxComponent', () => {
  let component: CarrouselWHYBoxComponent;
  let fixture: ComponentFixture<CarrouselWHYBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselWHYBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselWHYBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
