/**
 * Created by hkfq4 on 01.12.2016.
 */

import {Component, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {


    private countUpDisp = 0;
    private countDownDisp = 60000;
    private counterUp = 1;
    private counterDown = 60;

    startZeit() {
        console.log('Start Zeit');
        setTimeout(alert('Start Zeit'), 3000);
    }


    stopZeit() {
        console.log('Stop Zeit');
        setTimeout(function () {
            alert('Stop Zeit');
        }, 3000);
    }


    private timer_is_on = 0;
    private counterDisplay = 0;
    private counter = 0;

    stopCount() {
        this.timer_is_on = 0;
    }

    startCount() {
        this.timer_is_on = 1;
        setTimeout(this.temp, 1000);
    }

    continueTimer() {
        console.log('aaaaa');
        this.counter++;
        this.counterDisplay = this.counter * 1000;
        setTimeout(this.temp, 1000);
    }

    temp = () => {
        if (this.timer_is_on === 1) {
            //console.log('wwwwww');
            this.continueTimer();
        }
    };


}
