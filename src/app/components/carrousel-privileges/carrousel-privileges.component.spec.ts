import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselPrivilegesComponent } from './carrousel-privileges.component';

describe('CarrouselPrivilegesComponent', () => {
  let component: CarrouselPrivilegesComponent;
  let fixture: ComponentFixture<CarrouselPrivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselPrivilegesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
