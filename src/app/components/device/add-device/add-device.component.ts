import { Device } from './../device.interface';
import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { errorMessages } from './../../../config/config';

@Component({
  selector: 'add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  newDevice: Device = { width: 20, height: 5 } as Device;
  errors = errorMessages.device;
  deviceForm: FormGroup;

  constructor(private deviceService: DeviceService) {
    this.deviceForm = new FormGroup({
      width: new FormControl(this.newDevice.width, [Validators.required, Validators.min(1), Validators.max(30)]),
      height: new FormControl(this.newDevice.height, [Validators.required, Validators.min(1), Validators.max(30)])
    });
  }

  ngOnInit() {
  }

  get width() {
    return this.deviceForm.get('width');
  }

  get height() {
    return this.deviceForm.get('height');
  }

  createDevice(): void {
    if (this.deviceForm.valid) { this.deviceService.createDevice(this.newDevice); }
  }
}
