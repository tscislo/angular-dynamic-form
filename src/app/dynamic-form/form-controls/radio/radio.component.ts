import {Component} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'cpp-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseFormControl {

  public uniqueId: string;

  constructor() {
    super();
    this.uniqueId = 'cpp-radio-' + Math.ceil(Math.random() * 1000);
  }


}
