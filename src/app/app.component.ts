import {Component, ViewChild} from '@angular/core';
import {DynamicFormComponent} from './dynamic-form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'cpp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(DynamicFormComponent) dynamicFormComponent: DynamicFormComponent;

  public formControlConfigs =
    {
      'extendedData': [
        {
          type: {
            main: 'TEXT',
            sub: 'text'
          },
          label: 'Kraj',
          name: 'country'
        },
        {
          type: {
            main: 'COMPOSITE'
          },
          name: 'birthData',
          label: 'Data urodzenia',
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
          value: 'Tomek',
          isRequired: true
        },
        {
          type: {
            main: 'TEXT',
            sub: 'text'
          },
          label: 'Nazwisko',
          name: 'surname',
          isRequired: true
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
          name: 'terms',
          isRequired: true
        }
      ]
    };


  public submit() {
    console.log('value', this.dynamicFormComponent.dynamicFormGroup.value);
    console.log('valid', this.dynamicFormComponent.dynamicFormGroup.valid);
  }
}
