import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormGroupComponent} from '../dynamic-form-group/dynamic-form-group.component';
import {FormControlConfigs} from '../formControlConfigs.interface';

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

  @ViewChild('entry', {read: ViewContainerRef})
  private entry: ViewContainerRef;

  public dynamicFormGroup: FormGroup;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  build(formControlConfigs: FormControlConfigs) {
    this.dynamicFormGroup = new FormGroup({});

    Object.keys(formControlConfigs).forEach((formGroupName) => {
      console.log('drawing', formGroupName);
      const controlFactory = this.cfr.resolveComponentFactory(DynamicFormGroupComponent);
      const controlRef: any = this.entry.createComponent(controlFactory);
      controlRef.instance.controls = formControlConfigs[formGroupName];
      this.dynamicFormGroup.addControl(formGroupName, controlRef.instance.dynamicFormGroup);
    });


  }


}
