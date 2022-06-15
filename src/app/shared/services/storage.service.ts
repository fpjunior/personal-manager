import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() { }

  resetStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  genericSet(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  genericBtoaSet(key: string, value: string) {
    localStorage.setItem(this.btoaStrong(key), value);
  }

  // =========================
  genericBtoaSetSession(key: string, value: string) {
    sessionStorage.setItem(this.btoaStrong(key), value);
  }

  genericBtoaGetSession(key: string) {
    const genericValue = sessionStorage.getItem(this.btoaStrong(key));
    return genericValue || "";
  }
  // =========================


  genericGet(key: string): string {
    const genericValue = localStorage.getItem(key);
    return genericValue || "";
  }

  genericBtoaGet(key: string) {
    const genericValue = localStorage.getItem(this.btoaStrong(key));
    return genericValue || "";
  }

  // private btoaStrong = (value: string) => value;
  private btoaStrong = (value: string) => window.btoa(window.btoa(value));




  // setUnitData(value: { id: number; tittle: string; }) {
  //   localStorage.setItem(this.btoaStrong('unit'), JSON.stringify(value));
  // }

  // getUnitData(atrb?: string) {
  //   const unit = localStorage.getItem(this.btoaStrong('unit'));
  //   if (unit) {
  //     if (atrb === 'id') {
  //       return JSON.parse(unit).id;
  //     } else if (atrb === 'tittle') {
  //       return JSON.parse(unit).tittle;
  //     } else {
  //       return JSON.parse(unit)
  //     }
  //   }
  // }
}
