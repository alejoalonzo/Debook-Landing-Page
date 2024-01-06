import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsDebookComponent } from './what-is-debook.component';

describe('WhatIsDebookComponent', () => {
  let component: WhatIsDebookComponent;
  let fixture: ComponentFixture<WhatIsDebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsDebookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatIsDebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
