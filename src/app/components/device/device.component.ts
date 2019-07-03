import { DeviceService } from '../../services/device.service';
import { Device } from './device.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit, OnDestroy {
  deviceList: Device[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.deviceService.getDeviceList().subscribe(response => {
        this.deviceList = response;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  deleteDevice(id: number): void {
    this.deviceService.deleteDevice(id);
  }
}
