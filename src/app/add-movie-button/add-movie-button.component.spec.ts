import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieButtonComponent } from './add-movie-button.component';

describe('AddMovieButtonComponent', () => {
  let component: AddMovieButtonComponent;
  let fixture: ComponentFixture<AddMovieButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
