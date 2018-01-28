import {Injectable} from '@angular/core';
import {TextFieldComponent} from './form-controls/text-field/text-field.component';
import {RadioComponent} from './form-controls/radio/radio.component';
import {CompositeComponent} from './form-controls/composite/composite.component';

@Injectable()
export class FormTypesExtendedService {

  private types = {
    TEXT: TextFieldComponent,
    RADIO: RadioComponent,
    COMPOSITE: CompositeComponent
  };

  public get = (type) => this.types[type];

  constructor() {
  }

}
