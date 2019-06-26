import { RouterModule, ActivatedRoute } from '@angular/router';
import { CabinetService } from './../../../services/cabinet.service';
import { Cabinet } from './../cabinet.interface';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cabinet-details',
  templateUrl: './cabinet-details.component.html',
  styleUrls: ['./cabinet-details.component.scss']
})
export class CabinetDetailsComponent implements OnInit {
  cabinet: Cabinet = {} as Cabinet;

  constructor(private cabinetService: CabinetService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get('id');
        return this.cabinetService.getCabinet(id);
      })
    ).subscribe( response => this.cabinet = response);
  }
}
