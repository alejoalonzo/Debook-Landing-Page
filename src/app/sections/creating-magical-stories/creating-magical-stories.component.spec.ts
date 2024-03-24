import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingMagicalStoriesComponent } from './creating-magical-stories.component';

describe('CreatingMagicalStoriesComponent', () => {
  let component: CreatingMagicalStoriesComponent;
  let fixture: ComponentFixture<CreatingMagicalStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingMagicalStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatingMagicalStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
