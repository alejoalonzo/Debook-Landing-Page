import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicKeyIsForYouIfComponent } from './magic-key-is-for-you-if.component';

describe('MagicKeyIsForYouIfComponent', () => {
  let component: MagicKeyIsForYouIfComponent;
  let fixture: ComponentFixture<MagicKeyIsForYouIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicKeyIsForYouIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicKeyIsForYouIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
