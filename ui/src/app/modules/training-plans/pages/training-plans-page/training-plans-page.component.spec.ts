import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlansPageComponent } from './training-plans-page.component';

describe('TrainingPlansPageComponent', () => {
  let component: TrainingPlansPageComponent;
  let fixture: ComponentFixture<TrainingPlansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingPlansPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingPlansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
