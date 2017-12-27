import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
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

    @Output() sent = new EventEmitter();

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
            const controlFactory = this.cfr.resolveComponentFactory(DynamicFormGroupComponent);
            const controlRef: any = this.entry.createComponent(controlFactory);
            controlRef.instance.controls = formControlConfigs[formGroupName];
            this.dynamicFormGroup.addControl(formGroupName, controlRef.instance.dynamicFormGroup);
        });


    }


}
