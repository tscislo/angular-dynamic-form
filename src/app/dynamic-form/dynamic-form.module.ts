import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form.component';
import {TextFieldComponent} from './form-controls/text-field/text-field.component';
import {RadioComponent} from './form-controls/radio/radio.component';
import {FormTypesService} from './form-types.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    TextFieldComponent,
    RadioComponent
  ],
  declarations: [
    DynamicFormComponent,
    TextFieldComponent,
    RadioComponent
  ],
  providers: [
    FormTypesService
  ],
  exports: [DynamicFormComponent, ReactiveFormsModule]
})
export class DynamicFormModule {
}
