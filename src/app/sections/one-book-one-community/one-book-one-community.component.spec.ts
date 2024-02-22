import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBookOneCommunityComponent } from './one-book-one-community.component';

describe('OneBookOneCommunityComponent', () => {
  let component: OneBookOneCommunityComponent;
  let fixture: ComponentFixture<OneBookOneCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneBookOneCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneBookOneCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
