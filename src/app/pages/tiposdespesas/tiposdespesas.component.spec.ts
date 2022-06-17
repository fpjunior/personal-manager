/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TiposdespesasComponent } from './tiposdespesas.component';

describe('TiposdespesasComponent', () => {
  let component: TiposdespesasComponent;
  let fixture: ComponentFixture<TiposdespesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposdespesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposdespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
