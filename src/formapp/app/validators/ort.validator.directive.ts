
/**
 * Created by hkfq4 on 28.03.2017.
 */

import {Directive, forwardRef, Attribute} from '@angular/core';
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

    orte: Array<string> = [];

    constructor(@Attribute('ort') ort: string) {
        this.orte = ort.split(',');
    }

    public validate(c: AbstractControl): any {

        if (this.orte.indexOf(c.value) > -1) {
            return {};
        }

        return {
            ort: true
        };

    }

}


