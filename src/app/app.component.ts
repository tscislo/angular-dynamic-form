import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public formControlsConfigs = [
    {
      type: 'text',
      label: 'Imie',
      name: 'name',
      isRequired: true
    },
    {
      type: 'text',
      label: 'Nazwisko',
      name: 'surname',
      isRequired: true
    },
    {
      type: 'password',
      label: 'Hasło',
      name: 'password',
      isRequired: true
    },
    {
      type: 'text',
      label: 'Kraj',
      name: 'country'
    }
  ]


  public onSent(formGroup) {
    console.log(formGroup);
    console.log("Values", formGroup.value)
  }
}
