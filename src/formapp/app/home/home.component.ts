/**
 * Created by hkfq4 on 01.12.2016.
 */

import {Component, OnDestroy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {

    /**
     *
     * Timer Up
     *
     */
    private timerUpIsOn = 0;
    private counterUpDisplay = 0;
    private counterUp = 0;

    stopCountUp() {
        this.timerUpIsOn = 0;
    }

    startCountUp() {
        if (this.timerUpIsOn === 0) {
            this.timerUpIsOn = 1;
            setTimeout(this.countUp, 1000);
        }
    }

    continueUpTimer() {
        //console.log('aaaaa');
        this.counterUp++;
        this.counterUpDisplay = this.counterUp * 1000;
        setTimeout(this.countUp, 1000);
    }

    countUp = () => {
        if (this.timerUpIsOn === 1) {
            //console.log('wwwwww');
            this.continueUpTimer();
        }
    };

    /**
     *
     * Timer Down
     *
     */
    private timerDownIsOn = 0;
    private counterDownDisplay = 60000;
    private counterDown = 60;

    stopCountDown() {
        this.timerDownIsOn = 0;
    }

    startCountDown() {
        if (this.timerDownIsOn === 0) {
            this.timerDownIsOn = 1;
            setTimeout(this.countDown, 1000);
        }
    }

    continueDownTimer() {
        //console.log('aaaaa');
        this.counterDown--;
        this.counterDownDisplay = this.counterDown * 1000;
        setTimeout(this.countDown, 1000);
    }

    countDown = () => {
        if (this.timerDownIsOn === 1) {
            //console.log('wwwwww');
            this.continueDownTimer();
        }
    };


}
