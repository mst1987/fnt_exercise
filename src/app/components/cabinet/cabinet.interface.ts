import { Device } from './../device/device.interface';
export interface Cabinet {
  id: number;
  height: number;
  width: number;
  devices: Device[];
}
