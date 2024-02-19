import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselIsForYouIfComponent } from './carrousel-is-for-you-if.component';

describe('CarrouselIsForYouIfComponent', () => {
  let component: CarrouselIsForYouIfComponent;
  let fixture: ComponentFixture<CarrouselIsForYouIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselIsForYouIfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrouselIsForYouIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
