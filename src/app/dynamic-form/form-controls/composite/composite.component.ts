import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormControlConfig} from '../../formControlConfig.interface';
import {FormTypesService} from '../../form-types.service';

@Component({
  selector: 'cpp-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss']
})
export class CompositeComponent{

  set controls(formControlConfig: FormControlConfig) {
    this.build(formControlConfig);
  }

  public group: FormGroup;
  public controlConfig: FormControlConfig;

  @ViewChild('entry', {read: ViewContainerRef})
  private entry: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver,
              private formTypesService: FormTypesService) {
  }

  // TODO: Each child control should emit on changed value and composite
  // should concat it as { name: xxx, label: ...}
  build(controls) {

    controls.forEach(config => {
      const control = new FormControl();
      const component: any = this.formTypesService.get(config.type.main);
      const controlFactory = this.cfr.resolveComponentFactory(component);
      this.group.addControl(config.name, control);
      const controlRef: any = this.entry.createComponent(controlFactory);

      controlRef.instance.group = this.group;
      controlRef.instance.controlConfig = config;
    });

  }

  public isInValid = () => !this.group.valid && this.group.touched;

}
