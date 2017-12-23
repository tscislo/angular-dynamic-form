import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form.component';
import {TextFieldComponent} from './form-controls/text-field/text-field.component';
import {CheckboxComponent} from './form-controls/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    TextFieldComponent,
    CheckboxComponent
  ],
  declarations: [
    DynamicFormComponent,
    TextFieldComponent,
    CheckboxComponent
  ],
  exports: [DynamicFormComponent, ReactiveFormsModule]
})
export class DynamicFormModule {
}
