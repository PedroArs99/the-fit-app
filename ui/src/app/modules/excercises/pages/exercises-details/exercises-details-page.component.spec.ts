import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesDetailsPageComponent } from './exercises-details-page.component';

describe('ExercisesDetailsPageComponent', () => {
  let component: ExercisesDetailsPageComponent;
  let fixture: ComponentFixture<ExercisesDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercisesDetailsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercisesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
