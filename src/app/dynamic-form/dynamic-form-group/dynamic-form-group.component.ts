import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormControlConfig} from '../formControlConfig.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {FormTypesService} from '../form-types.service';

@Component({
  selector: 'cpp-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.scss']
})
export class DynamicFormGroupComponent {

  set controls(formControlConfig: FormControlConfig) {
    this.build(formControlConfig);
  }

  @Output() sent = new EventEmitter();

  @ViewChild('entry', {read: ViewContainerRef})
  private entry: ViewContainerRef;

  public dynamicFormGroup: FormGroup;

  constructor(private cfr: ComponentFactoryResolver,
              private formTypesService: FormTypesService) {
  }


  build(controls) {
    this.dynamicFormGroup = new FormGroup({});

    controls.forEach(config => {
      const component: any = this.formTypesService.get(config.type.main);
      const controlFactory = this.cfr.resolveComponentFactory(component);
      this.dynamicFormGroup.addControl(config.name, new FormControl());
      const controlRef: any = this.entry.createComponent(controlFactory);

      controlRef.instance.group = this.dynamicFormGroup;
      controlRef.instance.controlConfig = config;
    });
  }

}
