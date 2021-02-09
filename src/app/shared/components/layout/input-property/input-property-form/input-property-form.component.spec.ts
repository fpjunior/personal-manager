/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputPropertyFormComponent } from './input-property-form.component';

describe('InputPropertyFormComponent', () => {
  let component: InputPropertyFormComponent;
  let fixture: ComponentFixture<InputPropertyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropertyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
