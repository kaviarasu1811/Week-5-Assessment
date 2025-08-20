import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns3AgeClassification } from './qns3-age-classification.component';

describe('Qns3AgeClassification', () => {
  let component: Qns3AgeClassification;
  let fixture: ComponentFixture<Qns3AgeClassification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns3AgeClassification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns3AgeClassification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
