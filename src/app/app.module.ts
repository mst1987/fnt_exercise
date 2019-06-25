import { CabinetService } from './services/cabinet.service';
import { DeviceService } from './services/device.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    CabinetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DeviceService,
    CabinetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
