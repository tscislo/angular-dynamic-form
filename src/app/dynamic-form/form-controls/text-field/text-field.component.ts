import {Component, EventEmitter, HostListener} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
    selector: 'cpp-text-field',
    templateUrl: './text-field.component.html',
    styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends BaseFormControl {

    public keyUp = new EventEmitter();


}
