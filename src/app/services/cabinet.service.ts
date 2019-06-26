import { Cabinet } from '../components/cabinet/cabinet.interface';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const initCabinets: Array<Cabinet> = [
  { id: 1, width: 20, height: 50 },
  { id: 2, width: 30, height: 50 }
];

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  cabinetSubject: BehaviorSubject<Cabinet[]> = new BehaviorSubject(initCabinets);

  constructor() {}

  getCabinetList(): BehaviorSubject<Array<Cabinet>> {
    // HTTP Request to get List of Cabinets
    return this.cabinetSubject;
  }

  getCabinet(id: number): Observable<Cabinet> {
    // HTTP Get to get specific cabinet with ID
    return of(this.cabinetSubject.value.find(cabinet => cabinet.id === id));
  }

  updateCabinet(cabinet: Cabinet): void {
    return;
  }

  createCabinet(newCabinet: { width: number; height: number }): void {
    // HTTP Post to create new Cabinet
    const cabinetList = this.cabinetSubject.value;
    const id = cabinetList.length > 0 ? Math.max.apply(Math, cabinetList.map(cabinet => cabinet.id + 1)) : 1;

    this.cabinetSubject.next([ ...this.cabinetSubject.value, { ...newCabinet, id }]);
  }

  deleteCabinet(id: number): void {
    // HTTP Post to create new Cabinet
    const cabinetList = this.cabinetSubject.value;
    const delCabinet = cabinetList.findIndex((cabinet) => cabinet.id === id);

    cabinetList.splice(delCabinet, 1);

    this.cabinetSubject.next(cabinetList);
  }
}
