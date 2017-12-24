import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, Validator, Validators} from '@angular/forms';
import {FormControlConfig} from '../../formControlConfig.interface';

@Component({
  selector: 'cpp-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  public group: FormGroup;
  public controlConfig: FormControlConfig;
  private control: AbstractControl;

  constructor() {
  }

  ngOnInit() {
    this.control = this.group.controls[this.controlConfig.name];
    console.log(this.controlConfig);
    if (this.controlConfig.isRequired) {
      this.control.setValidators([Validators.required]);
    }
  }

  public isInValid = () => !this.control.valid && this.control.touched;

}
