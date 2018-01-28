import {Component, ComponentFactoryResolver, forwardRef, Inject, ViewChild, ViewContainerRef} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormControlConfig} from '../../formControlConfig.interface';
import {FormTypesService} from '../../form-types.service';

@Component({
    selector: 'cpp-composite',
    templateUrl: './composite.component.html',
    styleUrls: ['./composite.component.scss'],
})
export class CompositeComponent {

    set controls(formControlConfig: FormControlConfig) {
        this.build(formControlConfig);
    }

    public group: FormGroup;
    public shadowGroup: FormGroup = new FormGroup({});
    public control: AbstractControl;
    public controlConfig: FormControlConfig;

    @ViewChild('entry', {read: ViewContainerRef})
    private entry: ViewContainerRef;

    constructor(private cfr: ComponentFactoryResolver,
                @Inject(forwardRef(() => FormTypesService)) private formTypesService: FormTypesService) {
    }


    build(controls) {
        this.control = this.group.controls[this.controlConfig.name];
        controls.forEach(config => {
            const control = new FormControl();
            const component: any = this.formTypesService.get(config.type.main);
            const controlFactory = this.cfr.resolveComponentFactory(component);
            // TODO: Below code for validators can be unified with code in dynamic-form-group
            if (config.isRequired) {
                control.setValidators([Validators.required]);
            }
            if (config.value) {
                control.setValue(config.value);
            }
            this.shadowGroup.addControl(config.name, control);
            const controlRef: any = this.entry.createComponent(controlFactory);

            controlRef.instance.group = this.shadowGroup;
            controlRef.instance.controlConfig = config;
            controlRef.instance.keyUp.subscribe((value) => {
                let controlValue = '';
                Object.keys(this.shadowGroup.value).forEach((key) => {
                    controlValue += this.shadowGroup.value[key];
                });
                this.control.setValue(controlValue);
                if (this.shadowGroup.valid) {
                    this.control.setErrors(null);
                } else {
                    this.control.setErrors({'incorrect': true});
                }
            });
        });

    }

    public isInValid = () => !this.shadowGroup.valid && this.shadowGroup.touched;

}
