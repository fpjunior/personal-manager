/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DespesasComponent } from './despesas.component';

describe('DespesasComponent', () => {
  let component: DespesasComponent;
  let fixture: ComponentFixture<DespesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
