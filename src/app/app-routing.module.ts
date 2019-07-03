import { DeviceDetailsComponent } from './components/device/device-details/device-details.component';
import { DeviceComponent } from './components/device/device.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CabinetDetailsComponent } from './components/cabinet/cabinet-details/cabinet-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './components/cabinet/cabinet.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'cabinet', component: CabinetComponent },
  { path: 'cabinet/:id', component: CabinetDetailsComponent },
  { path: 'device/:id', component: DeviceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
