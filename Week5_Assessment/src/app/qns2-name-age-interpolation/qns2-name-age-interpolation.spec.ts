import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns2NameAgeInterpolation } from './qns2-name-age-interpolation.component';

describe('Qns2NameAgeInterpolation', () => {
  let component: Qns2NameAgeInterpolation;
  let fixture: ComponentFixture<Qns2NameAgeInterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns2NameAgeInterpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns2NameAgeInterpolation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
