import {Component, OnInit, ViewChild} from '@angular/core';
import {JsonEditorComponent} from '../json-editor/jsoneditor/jsoneditor.component';
import {JsonEditorOptions} from '../json-editor/jsoneditor/jsoneditor';

@Component({
    selector: 'cpp-live-editor',
    templateUrl: './live-editor.component.html',
    styleUrls: ['./live-editor.component.scss']
})
export class LiveEditorComponent {

    public editorOptions: JsonEditorOptions;
    public data: any;
    @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

    constructor() {
        this.editorOptions = new JsonEditorOptions();
        this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes

        this.data =      {
            'extendedData': [
                {
                    type: {
                        main: 'TEXT',
                        sub: 'text'
                    },
                    label: 'Kraj',
                    name: 'country',
                    isRequired: true,
                    asyncValidator: true
                },
                {
                    type: {
                        main: 'COMPOSITE'
                    },
                    name: 'birthDate',
                    label: 'Data urodzenia (composite control)',
                    isRequired: true,
                    controls: [
                        {
                            type: {
                                main: 'TEXT',
                                sub: 'number'
                            },
                            label: 'Dzień',
                            name: 'day',
                            isRequired: true
                        },
                        {
                            type: {
                                main: 'TEXT',
                                sub: 'number'
                            },
                            label: 'Miesiąc',
                            name: 'month',
                            isRequired: true
                        },
                        {
                            type: {
                                main: 'TEXT',
                                sub: 'number'
                            },
                            label: 'Rok',
                            name: 'year',
                            isRequired: true
                        },
                    ]
                },
                {
                    type: {
                        main: 'RADIO'
                    },
                    value: '10',
                    options: [
                        {
                            name: '7',
                            label: '7mln'
                        },
                        {
                            name: '10',
                            label: '10mln'
                        },
                        {
                            name: '15',
                            label: '15mln'
                        }
                    ],
                    label: 'Population?',
                    name: 'population'
                }
            ],
            'userData': [
                {
                    type: {
                        main: 'TEXT',
                        sub: 'text'
                    },
                    label: 'Imie',
                    name: 'name',
                },
                {
                    type: {
                        main: 'TEXT',
                        sub: 'text'
                    },
                    label: 'Nazwisko',
                    name: 'surname'
                },
                {
                    type: {
                        main: 'TEXT',
                        sub: 'password'
                    },
                    label: 'Hasło',
                    name: 'password',
                    isRequired: true
                },
                {
                    type: {
                        main: 'RADIO'
                    },
                    options: [
                        {
                            name: 'yes',
                            label: 'Yes'
                        },
                        {
                            name: 'no',
                            label: 'No'
                        },
                        {
                            name: 'maybe',
                            label: 'Maybe'
                        }
                    ],
                    label: 'Do you accept terms?',
                    name: 'terms'
                }
            ]
        };
    }

    public onSent(formGroup) {
        console.log(formGroup);
        console.log('Values', formGroup.value);
    }
}
