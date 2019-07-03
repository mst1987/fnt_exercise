import { Cabinet } from './../cabinet.interface';
import { CabinetService } from './../../../services/cabinet.service';
import { Device } from './../../device/device.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-device-to-cabinet',
  templateUrl: './add-device-to-cabinet.component.html',
  styleUrls: ['./add-device-to-cabinet.component.scss']
})
export class AddDeviceToCabinetComponent implements OnInit {
  deviceToAdd: Device = {} as Device;
  @Input() freeDevices: Device[];
  @Input() cabinet: Cabinet;

  constructor(private cabinetService: CabinetService) {}

  ngOnInit() {
    this.deviceToAdd = this.freeDevices[0];
  }

  addDeviceToCabinet(): void {
    const addThis: Device = { ...this.deviceToAdd };

    if (!this.cabinetService.addDeviceToCabinet(this.cabinet, addThis)) {
      window.alert('Hinzufügen nicht möglich');
    }
  }
}
