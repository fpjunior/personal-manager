import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFieldErrorMessageComponent } from './info-field-error-message.component';

describe('FieldErrorMessageComponent', () => {
  let component: InfoFieldErrorMessageComponent;
  let fixture: ComponentFixture<InfoFieldErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFieldErrorMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFieldErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
