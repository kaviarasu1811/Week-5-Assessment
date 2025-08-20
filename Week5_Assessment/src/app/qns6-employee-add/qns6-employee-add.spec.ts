import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns6EmployeeAdd } from './qns6-employee-add.component';

describe('Qns6EmployeeAdd', () => {
  let component: Qns6EmployeeAdd;
  let fixture: ComponentFixture<Qns6EmployeeAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns6EmployeeAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns6EmployeeAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
