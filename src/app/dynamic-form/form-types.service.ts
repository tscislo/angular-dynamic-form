import {Injectable} from '@angular/core';
import {TextFieldComponent} from "./form-controls/text-field/text-field.component";
import {RadioComponent} from "./form-controls/radio/radio.component";

@Injectable()
export class FormTypesService {

  private types = {
    TEXT: TextFieldComponent,
    RADIO: RadioComponent
  }

  public get = (type) => this.types[type];

  constructor() {
  }

}
