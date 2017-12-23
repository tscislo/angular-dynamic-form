import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, Validator, Validators} from "@angular/forms";
import {FormControlConfig} from "../../formControlConfig.interface";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public group: FormGroup;
  public controlConfig: FormControlConfig;
  private control: AbstractControl;

  constructor() {
  }

  ngOnInit() {
    this.control = this.group.controls[this.controlConfig.name];
    if (this.controlConfig.isRequired) {
      this.control.setValidators([Validators.required]);
    }
  }

  public isInValid = () => !this.control.valid && this.control.touched;

}
