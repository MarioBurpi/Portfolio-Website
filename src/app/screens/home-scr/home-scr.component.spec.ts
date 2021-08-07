import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScrComponent } from './home-scr.component';

describe('HomeScrComponent', () => {
  let component: HomeScrComponent;
  let fixture: ComponentFixture<HomeScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
