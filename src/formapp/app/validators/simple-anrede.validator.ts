/**
 * Created by hkfq4 on 29.03.2017.
 */



import {Directive, forwardRef} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

@Directive({
    selector: 'input[anreden]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => AnredeValidatorDirective),
        multi: true
    }]
})

export class AnredeValidatorDirective implements Validator {

    public validate(c: AbstractControl): any {
        if (c.value === 'Herr'
        || c.value === 'Frau'
        || c.value === 'Doktor') {

            return {};
        }
        return {
            anreden: {
                actual: c.value
            }
        };
    }
}



