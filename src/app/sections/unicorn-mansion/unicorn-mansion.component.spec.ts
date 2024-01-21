import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornMansionComponent } from './unicorn-mansion.component';

describe('UnicornMansionComponent', () => {
  let component: UnicornMansionComponent;
  let fixture: ComponentFixture<UnicornMansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnicornMansionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnicornMansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
