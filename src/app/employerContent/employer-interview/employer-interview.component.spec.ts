import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerInterviewComponent } from './employer-interview.component';

describe('EmployerInterviewComponent', () => {
  let component: EmployerInterviewComponent;
  let fixture: ComponentFixture<EmployerInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
