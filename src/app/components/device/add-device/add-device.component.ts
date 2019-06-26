import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  newDevice = { width: 20, height: 5 };

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {}

  createDevice(): void {
    this.deviceService.createDevice(this.newDevice);
  }
}
