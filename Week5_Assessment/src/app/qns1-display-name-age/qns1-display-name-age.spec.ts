import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns1DisplayNameAge } from './qns1-display-name-age.component';

describe('Qns1DisplayNameAge', () => {
  let component: Qns1DisplayNameAge;
  let fixture: ComponentFixture<Qns1DisplayNameAge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns1DisplayNameAge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns1DisplayNameAge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
