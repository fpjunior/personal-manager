/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogPicklistComponent } from './dialog-picklist.component';

describe('DialogPicklistComponent', () => {
  let component: DialogPicklistComponent;
  let fixture: ComponentFixture<DialogPicklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPicklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
