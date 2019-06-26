import { Subscription } from 'rxjs';
import { Device } from './../device/device.interface';
import { DeviceService } from './../../services/device.service';
import { CabinetService } from './../../services/cabinet.service';
import { Cabinet } from './../cabinet/cabinet.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  cabinetList: Cabinet[] = [];
  deviceList: Device[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private cabinetService: CabinetService, private deviceService: DeviceService) { }

  ngOnInit() {
    this.subscriptions.add(this.cabinetService.getCabinetList().subscribe((response) => {
      this.cabinetList = response;
    }));

    this.subscriptions.add(this.deviceService.getDeviceList().subscribe((response) => {
      this.deviceList = response;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
