import { DeviceService } from 'src/app/services/device.service';
import { ActivatedRoute } from '@angular/router';
import { Device } from './../device.interface';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
  device: Device = {} as Device;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get('id');
        return this.deviceService.getDevice(id);
      })
    ).subscribe( response => this.device = response);
  }
}
