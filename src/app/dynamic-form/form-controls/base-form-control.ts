import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import {FormControlConfig} from '../formControlConfig.interface';
import {OnInit} from '@angular/core';

export class BaseFormControl implements OnInit {

  public group: FormGroup;
  public controlConfig: FormControlConfig;
  protected control: AbstractControl;

  ngOnInit() {
    this.control = this.group.controls[this.controlConfig.name];
    if (this.controlConfig.isRequired) {
      setTimeout(() => this.control.setValidators([Validators.required]));
    }
    if (this.controlConfig.value) {
      setTimeout(() => this.control.setValue(this.controlConfig.value));
    }
  }

  public isInValid = () => !this.control.valid && this.control.touched;

}

