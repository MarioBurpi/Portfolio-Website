import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutScrComponent } from './about-scr.component';

describe('AboutScrComponent', () => {
  let component: AboutScrComponent;
  let fixture: ComponentFixture<AboutScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutScrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
