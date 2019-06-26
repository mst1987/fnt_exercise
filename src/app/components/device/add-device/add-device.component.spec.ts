import { AppModule } from './../../../app.module';
import { AppRoutingModule } from './../../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CabinetComponent } from './../../cabinet/cabinet.component';
import { DeviceComponent } from './../device.component';
import { DashboardComponent } from './../../dashboard/dashboard.component';
import { AddCabinetComponent } from './../../cabinet/add-cabinet/add-cabinet.component';
import { CabinetDetailsComponent } from './../../cabinet/cabinet-details/cabinet-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceComponent } from './add-device.component';

describe('AddDeviceComponent', () => {
  let component: AddDeviceComponent;
  let fixture: ComponentFixture<AddDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
