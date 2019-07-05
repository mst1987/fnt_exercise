import { Cabinet } from './../components/cabinet/cabinet.interface';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from './../components/device/device.interface';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const initCabinets: Array<Cabinet> = [
  { id: 1, width: 20, height: 50, devices: [] as Device[] },
  { id: 2, width: 30, height: 50, devices: [] as Device[] }
];

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  cabinetSubject: BehaviorSubject<Cabinet[]> = new BehaviorSubject(initCabinets);

  constructor(private deviceService: DeviceService) {}

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

    this.cabinetSubject.next([...this.cabinetSubject.value, { ...newCabinet, id, devices: [] as Device[] }]);
  }

  deleteCabinet(id: number): void {
    // HTTP Post to create new Cabinet
    const cabinetList = this.cabinetSubject.value;
    const delCabinet = cabinetList.findIndex(cabinet => cabinet.id === id);

    cabinetList.splice(delCabinet, 1);

    this.cabinetSubject.next(cabinetList);
  }

  addDeviceToCabinet(cabinet: Cabinet, device: Device): boolean {
    // HTTP Post to add Device
    if (this.checkDevicePositions(device, cabinet)) {
      const cabinetList = this.cabinetSubject.value;
      const toUpdate = cabinetList.find(cabinetItem => cabinetItem.id === cabinet.id);
      if (!toUpdate.devices) {
        toUpdate.devices = [] as Device[];
      }
      toUpdate.devices.push(device);

      device.cabinetId = toUpdate.id;
      this.deviceService.updateDevice(device);

      this.cabinetSubject.next(cabinetList);
      return true;
    }
    return false;
  }

  removeDeviceFromCabinet(device: Device, cabinet: Cabinet): Promise<boolean> {
    return;
  }

  checkDevicePositions(device: Device, cabinet: Cabinet): boolean {
    let check = {};

    if (cabinet.devices.length > 0) {
      check = cabinet.devices.find(cabinetDevice => {
        return (
          // unten rechts -> oben links
          !(device.posX + device.width >= cabinetDevice.posX
            && device.posY + device.height >= cabinetDevice.posY) ||
          // unten links -> oben rechts
          !(
            device.posX <= cabinetDevice.posX + cabinetDevice.width
            && device.posY + device.height >= cabinetDevice.posY
          ) ||
          // oben links -> unten rechts
          !(
            device.posX <= cabinetDevice.posX + cabinetDevice.width &&
            device.posY <= cabinetDevice.posY + cabinetDevice.height
          ) ||
          // oben rechts -> unten links
          !(
            device.posX + device.width >= cabinetDevice.posX
            && device.posY <= cabinetDevice.posY + cabinetDevice.height
          )
        );
      });
    }

    if (
      check === undefined ||
      device.height + device.posY > cabinet.height ||
      device.width + device.posX > cabinet.width
    ) {
      return false;
    }

    return true;
  }
}
