import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesMapComponent } from './challenges-map.component';

describe('ChallengesMapComponent', () => {
  let component: ChallengesMapComponent;
  let fixture: ComponentFixture<ChallengesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengesMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
