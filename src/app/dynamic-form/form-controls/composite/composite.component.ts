import {Component, ComponentFactoryResolver, forwardRef, Inject, ViewChild, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    public controlConfig: FormControlConfig;

    @ViewChild('entry', {read: ViewContainerRef})
    private entry: ViewContainerRef;

    constructor(private cfr: ComponentFactoryResolver,
                @Inject(forwardRef(() => FormTypesService)) private formTypesService: FormTypesService) {
    }

    // TODO: Each child control should emit on changed value and composite
    // should concat it as { name: xxx, label: ...}
    build(controls) {

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
            this.group.addControl(config.name, control);
            const controlRef: any = this.entry.createComponent(controlFactory);

            controlRef.instance.group = this.group;
            controlRef.instance.controlConfig = config;
        });

    }

    public isInValid = () => !this.group.valid && this.group.touched;

}
