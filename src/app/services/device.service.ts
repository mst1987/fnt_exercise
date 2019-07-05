import { Device } from '../components/device/device.interface';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const initDevices: Device[] = [
  { id: 1, width: 20, height: 5, posX: 0, posY: 0 },
  { id: 2, width: 30, height: 10, posX: 0, posY: 0 },
  { id: 3, width: 10, height: 5, posX: 0, posY: 0 },
  { id: 4, width: 15, height: 3, posX: 0, posY: 0 }
];

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  deviceSubject: BehaviorSubject<Device[]> = new BehaviorSubject(initDevices);

  constructor() {}

  getDeviceList(): Observable<Device[]> {
    // HTTP Get to get List of Devices
    return this.deviceSubject;
  }

  getDevice(id: number): Observable<Device> {
    // HTTP Get to get Device Info
    return of(this.deviceSubject.value.find(device => device.id === id));
  }

  updateDevice(updatedDevice: Device): void {
    console.log(updatedDevice)
    const deviceList = this.deviceSubject.value;
    const toUpdate = deviceList.findIndex(device => device.id === updatedDevice.id);
    deviceList[toUpdate] = updatedDevice;
    this.deviceSubject.next([ ...deviceList ]);
  }

  createDevice(newDevice: { width: number; height: number }): void {
    // HTTP Post to create new Device
    const deviceList = this.deviceSubject.value;
    const id = deviceList.length > 0 ? Math.max.apply(Math, deviceList.map(device => device.id + 1)) : 1;

    this.deviceSubject.next([...this.deviceSubject.value, { ...newDevice, id }]);
  }

  deleteDevice(id: number): void {
    // HTTP Post to create new device
    const deviceList = this.deviceSubject.value;
    const delDevice = deviceList.findIndex(device => device.id === id);

    deviceList.splice(delDevice, 1);

    this.deviceSubject.next(deviceList);
  }
}
