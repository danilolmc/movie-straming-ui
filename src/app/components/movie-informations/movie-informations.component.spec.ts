import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInformationsComponent } from './movie-informations.component';

describe('MovieInformationsComponent', () => {
  let component: MovieInformationsComponent;
  let fixture: ComponentFixture<MovieInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
