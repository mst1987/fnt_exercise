import { Device } from '../device/device.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDeviceList(): Observable<Array<Device>> {
    // HTTP Get to get List of Devices
    return of([]);
  }

  getDevice(id: number): Observable<Device> {
    // HTTP Get to get Device Info
    return of();
  }

  updateDevice(device: Device): void {
    return;
  }

  addDevice(newDevice: { width: number, height: number }): void {
    // HTTP Post to create new Device
    return;
  }
}
