import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDebookInPublicComponent } from './building-debook-in-public.component';

describe('BuildingDebookInPublicComponent', () => {
  let component: BuildingDebookInPublicComponent;
  let fixture: ComponentFixture<BuildingDebookInPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingDebookInPublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingDebookInPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
