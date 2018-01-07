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
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {FormTypesService} from '../form-types.service';
import {CountryAsyncValidator} from '../validators/country-async.validator';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'cpp-dynamic-form-group',
    templateUrl: './dynamic-form-group.component.html',
    styleUrls: ['./dynamic-form-group.component.scss']
})
export class DynamicFormGroupComponent {

    set controls(formControlConfig: FormControlConfig) {
        this.build(formControlConfig);
    }


    @ViewChild('entry', {read: ViewContainerRef})
    private entry: ViewContainerRef;

    public dynamicFormGroup: FormGroup;

    constructor(private cfr: ComponentFactoryResolver,
                private formTypesService: FormTypesService,
                private http: HttpClient) {
    }


    build(controls) {
        this.dynamicFormGroup = new FormGroup({});

        controls.forEach((config: FormControlConfig) => {
            const component: any = this.formTypesService.get(config.type.main);
            const controlFactory = this.cfr.resolveComponentFactory(component);
            const formControl = new FormControl();
            // TODO: Move those additional validators to some more general place, add support for ANY validator
            if (config.isRequired) {
                formControl.setValidators([Validators.required]);
            }
            if (config.asyncValidator) {
                formControl.setAsyncValidators(CountryAsyncValidator.createValidator(this.http));
            }
            if (config.value) {
                formControl.setValue(config.value);
            }
            this.dynamicFormGroup.addControl(config.name, formControl);
            const controlRef: any = this.entry.createComponent(controlFactory);

            controlRef.instance.group = this.dynamicFormGroup;
            controlRef.instance.controlConfig = config;
        });
    }

}
