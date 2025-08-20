import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns8ChildComponent } from './qns8-child-component.component';

describe('Qns8ChildComponent', () => {
  let component: Qns8ChildComponent;
  let fixture: ComponentFixture<Qns8ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns8ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns8ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
