import { CabinetService } from '../../services/cabinet.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cabinet } from './cabinet.interface';

@Component({
  selector: 'cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit, OnDestroy {
  cabinetList: Cabinet[] = [];
  subscription: Subscription = new Subscription();

  constructor(private cabinetService: CabinetService) {}

  ngOnInit() {
    this.subscription.add(
      this.cabinetService.getCabinetList().subscribe(response => {
        this.cabinetList = response;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteCabinet(id: number) {
    this.cabinetService.deleteCabinet(id);
  }
}
