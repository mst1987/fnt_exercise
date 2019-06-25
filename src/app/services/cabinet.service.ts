import { Cabinet } from './../cabinet/cabinet.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor() { }

  getCabinetList(): Observable<Array<Cabinet>> {
    // HTTP Request to get List of Cabinets
    return of([]);
  }

  getCabinet(id: number): Cabinet {
    return;
  }

  addCabinet(newCabinet: Cabinet): void {
    // HTTP Post to create new Cabinet

    return;
  }
}
