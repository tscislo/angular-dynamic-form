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
import {TextFieldComponent} from './form-controls/text-field.component';

@Component({
  selector: 'dynamic-form',
  template: `
    <form [formGroup]="dynamicForm"
          (ngSubmit)="onSent.emit(dynamicForm)">
      <ng-container #entry></ng-container>
      <button [disabled]="!dynamicForm.valid">Submit!</button>
    </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {

  @Input()
  set controls(formControlConfig: FormControlConfig) {
    this.build(formControlConfig)
  }

  @Output() onSent = new EventEmitter();

  @ViewChild('entry', {read: ViewContainerRef})
  private entry: ViewContainerRef;

  public dynamicForm: FormGroup;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  build(controls) {
    this.dynamicForm = new FormGroup({});
    const controlFactory = this.cfr.resolveComponentFactory(TextFieldComponent);

    controls.forEach(config => {
      this.dynamicForm.addControl(config.name, new FormControl());
      const controlRef = this.entry.createComponent(controlFactory);

      controlRef.instance.group = this.dynamicForm;
      controlRef.instance.controlConfig = config;
    })
  }

}
