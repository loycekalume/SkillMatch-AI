import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcandidatesComponent } from './topcandidates.component';

describe('TopcandidatesComponent', () => {
  let component: TopcandidatesComponent;
  let fixture: ComponentFixture<TopcandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopcandidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
