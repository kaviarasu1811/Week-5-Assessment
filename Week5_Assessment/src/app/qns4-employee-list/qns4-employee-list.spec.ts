import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns4EmployeeList } from './qns4-employee-list.component';

describe('Qns4EmployeeList', () => {
  let component: Qns4EmployeeList;
  let fixture: ComponentFixture<Qns4EmployeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns4EmployeeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns4EmployeeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
