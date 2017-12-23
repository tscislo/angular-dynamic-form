import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormControlConfig} from '../../formControlConfig.interface';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

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
