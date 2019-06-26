import { errorMessages } from './../../../config/config';
import { CabinetService } from './../../../services/cabinet.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-cabinet',
  templateUrl: './add-cabinet.component.html',
  styleUrls: ['./add-cabinet.component.scss']
})
export class AddCabinetComponent implements OnInit {
  newCabinet = { width: 20, height: 40 };
  cabinetForm: FormGroup;
  errors = errorMessages.cabinet;

  constructor(private cabinetService: CabinetService) {}

  ngOnInit() {
    this.cabinetForm = new FormGroup({
      width: new FormControl(this.newCabinet.width, [Validators.required, Validators.min(1), Validators.max(30)]),
      height: new FormControl(this.newCabinet.height, [Validators.required, Validators.min(1), Validators.max(50)])
    });
  }

  get width() {
    return this.cabinetForm.get('width');
  }

  get height() {
    return this.cabinetForm.get('height');
  }

  createCabinet(): void {
    if (this.cabinetForm.valid) this.cabinetService.createCabinet(this.newCabinet);
  }
}
