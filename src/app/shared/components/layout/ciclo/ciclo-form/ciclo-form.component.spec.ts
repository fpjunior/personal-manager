/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CicloFormComponent } from './ciclo-form.component';

describe('CicloFormComponent', () => {
  let component: CicloFormComponent;
  let fixture: ComponentFixture<CicloFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
