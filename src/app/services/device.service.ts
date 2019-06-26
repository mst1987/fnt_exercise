import { Device } from '../components/device/device.interface';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const initDevices: Array<Device> = [
  { id: 1, width: 20, height: 5 },
  { id: 2, width: 30, height: 10 },
  { id: 3, width: 10, height: 5 },
  { id: 4, width: 15, height: 3 }
];

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  deviceSubject: BehaviorSubject<Device[]> = new BehaviorSubject(initDevices);

  constructor() { }

  getDeviceList(): Observable<Array<Device>> {
    // HTTP Get to get List of Devices
    return this.deviceSubject;
  }

  getDevice(id: number): Observable<Device> {
    // HTTP Get to get Device Info
    return of(this.deviceSubject.value.find(cabinet => cabinet.id === id));
  }

  updateDevice(device: Device): void {
    return;
  }

  createDevice(newDevice: { width: number, height: number }): void {
    // HTTP Post to create new Device
    const deviceList = this.deviceSubject.value;
    const id = deviceList.length > 0 ? Math.max.apply(Math, deviceList.map(cabinet => cabinet.id + 1)) : 1;

    this.deviceSubject.next([ ...this.deviceSubject.value, { ...newDevice, id }]);
  }

  deleteDevice(id: number): void {
    // HTTP Post to create new Cabinet
    const cabinetList = this.deviceSubject.value;
    const delDevice = cabinetList.findIndex((cabinet) => cabinet.id === id);

    cabinetList.splice(delDevice, 1);

    this.deviceSubject.next(cabinetList);
  }
}
