import { Device } from './../../device/device.interface';
import { DeviceService } from './../../../services/device.service';
import { ActivatedRoute } from '@angular/router';
import { CabinetService } from './../../../services/cabinet.service';
import { Cabinet } from './../cabinet.interface';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cabinet-details',
  templateUrl: './cabinet-details.component.html',
  styleUrls: ['./cabinet-details.component.scss']
})
export class CabinetDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  cabinet: Cabinet = {} as Cabinet;
  freeDevices: Device[] = [] as Device[];

  form = new FormGroup({});

  constructor(
    public cabinetService: CabinetService,
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = +params.get('id');
          return this.cabinetService.getCabinet(id);
        })
      )
      .subscribe(response => (this.cabinet = response));

    this.subscription.add(
      this.deviceService.getDeviceList().subscribe(deviceList => {
        this.freeDevices = deviceList.filter(device => !device.cabinetId);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateDeviceOfCabinet(device) {
    this.deviceService.updateDevice(device);
  }

  removeDeviceFromCabinet(device) {
    this.cabinetService.removeDeviceFromCabinet(device, this.cabinet);
  }
}
