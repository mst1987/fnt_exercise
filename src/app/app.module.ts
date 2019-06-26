import { AddCabinetComponent } from './components/cabinet/add-cabinet/add-cabinet.component';
import { CabinetService } from './services/cabinet.service';
import { DeviceService } from './services/device.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './components/device/device.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabinetDetailsComponent } from './components/cabinet/cabinet-details/cabinet-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeviceDetailsComponent } from './components/device/device-details/device-details.component';
import { AddDeviceComponent } from './components/device/add-device/add-device.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    CabinetComponent,
    AddCabinetComponent,
    CabinetDetailsComponent,
    DashboardComponent,
    DeviceDetailsComponent,
    AddDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DeviceService,
    CabinetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
