import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicFormComponent} from './dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {DynamicFormGroupComponent} from '../dynamic-form-group/dynamic-form-group.component';
import {TextFieldComponent} from '../form-controls/text-field/text-field.component';
import {RadioComponent} from '../form-controls/radio/radio.component';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {FormTypesService} from '../form-types.service';

@Component({
  selector: `cpp-host-component`,
  template: `
    <cpp-dynamic-form [controls]="formControlConfigs"></cpp-dynamic-form>
  `
})
class TestHostComponent {

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
          isRequired: true
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

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        DynamicFormComponent,
        DynamicFormGroupComponent,
        TestHostComponent,
        TextFieldComponent,
        RadioComponent,
      ],
      providers: [
        FormTypesService
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          TextFieldComponent,
          RadioComponent,
          DynamicFormGroupComponent
        ],
      },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
