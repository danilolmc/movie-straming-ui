import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCarrouselComponent } from './movies-carrousel.component';

describe('MoviesCarrouselComponent', () => {
  let component: MoviesCarrouselComponent;
  let fixture: ComponentFixture<MoviesCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
