import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RadioComponent} from './radio.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [RadioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({});
    component.group.addControl('population', new FormControl());
    component.controlConfig = {
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
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
