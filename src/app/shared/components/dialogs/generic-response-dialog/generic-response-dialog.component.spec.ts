/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenericResponseDialogComponent } from './generic-response-dialog.component';

describe('GenericResponseDialogComponent', () => {
  let component: GenericResponseDialogComponent;
  let fixture: ComponentFixture<GenericResponseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericResponseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
