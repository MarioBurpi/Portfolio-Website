import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkScrComponent } from './work-scr.component';

describe('WorkScrComponent', () => {
  let component: WorkScrComponent;
  let fixture: ComponentFixture<WorkScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkScrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
