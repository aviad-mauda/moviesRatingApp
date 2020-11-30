import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNameInputComponent } from './movie-name-input.component';

describe('MovieNameInputComponent', () => {
  let component: MovieNameInputComponent;
  let fixture: ComponentFixture<MovieNameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNameInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
