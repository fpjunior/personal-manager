/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UfsAtuacaoDashboardComponent } from './ufs-atuacao-dashboard.component';

describe('UfsAtuacaoDashboardComponent', () => {
  let component: UfsAtuacaoDashboardComponent;
  let fixture: ComponentFixture<UfsAtuacaoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UfsAtuacaoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UfsAtuacaoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
