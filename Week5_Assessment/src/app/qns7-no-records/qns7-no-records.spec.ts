import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns7NoRecords } from './qns7-no-records.component';

describe('Qns7NoRecords', () => {
  let component: Qns7NoRecords;
  let fixture: ComponentFixture<Qns7NoRecords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns7NoRecords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns7NoRecords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
