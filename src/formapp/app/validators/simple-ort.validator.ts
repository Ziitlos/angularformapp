/**
 * Created by hkfq4 on 28.03.2017.
 */

import {Directive, forwardRef} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

@Directive({
    selector: 'input[ort]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => OrtValidatorDirective),
            multi: true
        }
    ]
})
export class OrtValidatorDirective implements Validator {

    public validate(c: AbstractControl): any {

        if (c.value === 'Graz'
            || c.value === 'Hamburg'
            || c.value === 'Frankfurt'
            || c.value === 'Wien'
            || c.value === 'Mallorca') {

            return {};
        }

        return {
            ort: {
                actual: c.value
            }
        };


    }

}


