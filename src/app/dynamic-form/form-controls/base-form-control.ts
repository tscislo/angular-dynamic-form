import {AbstractControl, FormGroup} from '@angular/forms';
import {FormControlConfig} from '../formControlConfig.interface';
import {OnInit} from '@angular/core';

export class BaseFormControl implements OnInit {

  public group: FormGroup;
  public controlConfig: FormControlConfig;
  protected control: AbstractControl;

  ngOnInit() {
    this.control = this.group.controls[this.controlConfig.name];
  }

  public isInValid = () => !this.control.valid && this.control.touched;

}

