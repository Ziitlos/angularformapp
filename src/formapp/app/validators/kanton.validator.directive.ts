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
    @Input()kantonsListe: string;


    public validate(c: AbstractControl): any {

        console.log('kantonsListe ' + this.kantonsListe);

        var kantone = this.kantonsListe.split(',');

        console.log('kantone ' + kantone);
        console.log('c.value ' + c.value);
        console.log('kantone.indexOf(c.value) ' + kantone.indexOf(c.value));

        if (kantone.indexOf(c.value) > -1) {
            return{};
        }
        return {irgendwas: 'blabla'};
    }
}
