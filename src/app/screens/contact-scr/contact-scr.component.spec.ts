import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactScrComponent } from './contact-scr.component';

describe('ContactScrComponent', () => {
  let component: ContactScrComponent;
  let fixture: ComponentFixture<ContactScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactScrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
