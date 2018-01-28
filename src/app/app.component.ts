import {Component} from '@angular/core';

@Component({
    selector: 'cpp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public formControlConfigs =
        {
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
                        main: 'COMPOSITE'
                    },
                    name: 'nameSurname',
                    label: 'Imie i nazwisko (composite control)',
                    isRequired: true,
                    controls: [
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


    public onSent(formGroup) {
        console.log(formGroup);
        console.log('Values', formGroup.value);
    }
}
