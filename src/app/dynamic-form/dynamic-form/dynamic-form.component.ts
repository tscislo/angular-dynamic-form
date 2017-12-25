import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormControlConfig} from "../formControlConfig.interface";
import {FormTypesService} from "../form-types.service";
import {DynamicFormGroupComponent} from "../dynamic-form-group/dynamic-form-group.component";
import {FormControlConfigs} from "../formControlConfigs.interface";

@Component({
  selector: 'cpp-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input()
  set controls(formControlConfigs: FormControlConfigs) {
    this.build(formControlConfigs);
  }

  // @Output() sent = new EventEmitter();

  @ViewChild('entry', {read: ViewContainerRef})
  private entry: ViewContainerRef;

  public dynamicFormGroup: FormGroup;

  constructor(private cfr: ComponentFactoryResolver,
              private formTypesService: FormTypesService) {
  }

  ngOnInit() {
  }

  build(formControlConfigs: FormControlConfigs) {
    this.dynamicFormGroup = new FormGroup({});

    Object.keys(formControlConfigs).forEach((formGroupName) => {
      console.log('drawing', formGroupName)
      // const component: any = this.formTypesService.get(config.type.main);
      const controlFactory = this.cfr.resolveComponentFactory(DynamicFormGroupComponent);
      // this.dynamicFormGroup.addControl(config.name, new FormControl());
      const controlRef: any = this.entry.createComponent(controlFactory);
      controlRef.instance.controls = formControlConfigs[formGroupName];
      // controlRef.instance.group = this.dynamicFormGroup;
      // controlRef.instance.controlConfig = config;
    });


  }


}
