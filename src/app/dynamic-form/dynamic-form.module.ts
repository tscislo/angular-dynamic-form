import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormGroupComponent} from './dynamic-form-group/dynamic-form-group.component';
import {TextFieldComponent} from './form-controls/text-field/text-field.component';
import {RadioComponent} from './form-controls/radio/radio.component';
import {FormTypesService} from './form-types.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {CompositeComponent} from './form-controls/composite/composite.component';
import {FormTypesExtendedService} from './form-types-extended.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    TextFieldComponent,
    RadioComponent,
    DynamicFormGroupComponent,
    CompositeComponent
  ],
  declarations: [
    DynamicFormGroupComponent,
    TextFieldComponent,
    RadioComponent,
    DynamicFormComponent,
    CompositeComponent
  ],
  providers: [
    FormTypesService,
    FormTypesExtendedService
  ],
  exports: [
    DynamicFormGroupComponent,
    ReactiveFormsModule,
    DynamicFormComponent
  ]
})
export class DynamicFormModule {
}
