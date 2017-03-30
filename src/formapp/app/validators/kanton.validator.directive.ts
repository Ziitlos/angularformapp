/**
 * Created by hkfq4 on 30.03.2017.
 */


import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';
import {Input, Directive, forwardRef, Attribute} from '@angular/core';


@Directive({
    selector: 'input[kantonsListe]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => KantonValidatorDirective),
        multi: true
    }]
})


export class KantonValidatorDirective implements Validator {

    kantonsListe: Array<string> = [];


    constructor(@Attribute('kantonsListe') kantone: string) {
        this.kantonsListe = kantone.split(',');
    }


    public validate(c: AbstractControl): any {
        if (this.kantonsListe.indexOf(c.value) > -1) {
            return {};
        }
        return {
            kantonsListe: true
        };
    }
}
