import { Component, OnInit } from '@angular/core';
import { Cabinet } from './cabinet.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
  cabinetList: Cabinet[] = [];
  width = 200;
  height = 400;

  constructor() { }

  ngOnInit() {
  }


  addCabinet() {
    this.cabinetList.push({ id: this.cabinetList.length + 1, width: this.width, height: this.height });
  }

}
