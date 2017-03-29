/**
 * Created by hkfq4 on 28.03.2017.
 */

import {Directive, forwardRef} from '@angular/core';
import {NG_ASYNC_VALIDATORS} from '@angular/forms';


@Directive({
    selector: 'input[ortAsync]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => OrtAsyncValidatorDirective),
            multi: true
        }
    ]
})

export class OrtAsyncValidatorDirective {

    public validate(c): Promise<any> {
        return new Promise<any>((resove) => {
            // Kommunikation mit Server simulieren
            setTimeout(() => {

                if (c.value === 'Graz'
                    || c.value === 'Hamburg') {
                    resove({});
                }

                resove({ ortAsync: true });
            }, 5000);
        });
    }

}
