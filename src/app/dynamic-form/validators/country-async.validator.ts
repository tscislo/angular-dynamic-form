import {AbstractControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';


export class CountryAsyncValidator {
    static createValidator(http: HttpClient) {
        return (control: AbstractControl) => {
            return Observable
                .timer(500)
                .switchMap(() => http
                    .get('assets/allowed-countries.json')
                    .map((res: any) => {
                        console.log(res);
                        return (res.find(country => country === control.value)) ? null : {'countryNotValid': true};
                    }));
        };
    }
}