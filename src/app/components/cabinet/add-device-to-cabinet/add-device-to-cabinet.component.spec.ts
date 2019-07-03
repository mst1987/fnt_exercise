import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceToCabinetComponent } from './add-device-to-cabinet.component';

describe('AddDeviceToCabinetComponent', () => {
  let component: AddDeviceToCabinetComponent;
  let fixture: ComponentFixture<AddDeviceToCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceToCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceToCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
