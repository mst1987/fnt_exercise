import { Device } from './../components/device/device.interface';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { DeviceService } from './device.service';
import { map } from 'rxjs/operators';

describe('DeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceService = TestBed.get(DeviceService);
    expect(service).toBeTruthy();
  });

  it('should return a List of Devices', () => {
    const service: DeviceService = TestBed.get(DeviceService);
    const res = service.getDeviceList().subscribe(response => {
      expect(response.length).toBe(4);
    });
  });
});
