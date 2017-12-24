import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Output,
  EventEmitter
} from '@angular/core';
import {FormControlConfig} from './formControlConfig.interface';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {TextFieldComponent} from './form-controls/text-field/text-field.component';
import {RadioComponent} from './form-controls/radio/radio.component';
import {FormTypesService} from './form-types.service';

@Component({
  selector: 'cpp-dynamic-form',
  template: `
    <form [formGroup]="dynamicForm"
          (ngSubmit)="sent.emit(dynamicForm)">
      <ng-container #entry></ng-container>
      <button [disabled]="!dynamicForm.valid">Submit!</button>
    </form>
  `,
  styles: []
})
export class DynamicFormComponent {

  @Input()
  set controls(formControlConfig: FormControlConfig) {
    this.build(formControlConfig);
  }

  @Output() sent = new EventEmitter();

  @ViewChild('entry', {read: ViewContainerRef})
  private entry: ViewContainerRef;

  public dynamicForm: FormGroup;

  constructor(private cfr: ComponentFactoryResolver,
              private formTypesService: FormTypesService) {
  }


  build(controls) {
    this.dynamicForm = new FormGroup({});

    controls.forEach(config => {
      const component: any = this.formTypesService.get(config.type.main);
      const controlFactory = this.cfr.resolveComponentFactory(component);
      this.dynamicForm.addControl(config.name, new FormControl());
      const controlRef: any = this.entry.createComponent(controlFactory);

      controlRef.instance.group = this.dynamicForm;
      controlRef.instance.controlConfig = config;
    });
  }

}
