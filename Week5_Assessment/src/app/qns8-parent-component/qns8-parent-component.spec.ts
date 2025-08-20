import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qns8ParentComponent } from './qns8-parent-component.component';

describe('Qns8ParentComponent', () => {
  let component: Qns8ParentComponent;
  let fixture: ComponentFixture<Qns8ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qns8ParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qns8ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
