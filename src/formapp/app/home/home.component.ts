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
    private disaSetReset = false;
    private disaStart = false;

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
    private counterDownVorwahl = 180;
    private counterDownDisplay = 180000;
    private counterDown = 180;

    setCountDownTime() {
        this.counterDownDisplay = this.counterDownVorwahl * 1000;
        this.counterDown = this.counterDownVorwahl;
        // Wenn der Reset Button geklickt wird, ist auch der Start button klickbar
        this.disaStart = false;
    }

    stopCountDown() {
        this.timerDownIsOn = 0;
        // Nur wenn die Zeit kleiner gleich 0 ist darf der Resetbutton geklickt werden können
        if (this.counterDown <= 0) {
            this.disaSetReset = false;
        }
        // Nur wenn die Zeit grösser 0 ist darf der Startbutton geklickt werden können
        if (this.counterDown > 0) {
            this.disaStart = false;
        }
    }

    startCountDown() {
        if (this.timerDownIsOn === 0) {
            this.timerDownIsOn = 1;
            setTimeout(this.countDown, 1000);
        }
        // Wenn der Start Button gklickt wurde, sind der Reset und Start Button disabled
        this.disaSetReset = true;
        this.disaStart = true;
    }

    continueDownTimer() {
        //console.log('aaaaa');
        this.counterDown--;
        this.counterDownDisplay = this.counterDown * 1000;

        if (this.counterDown <= 0) {
            this.timerDownIsOn = 0;
            // Nur wenn die Zeit 0 ist, darf die Zeit geresetet werden
            this.disaSetReset = false;
        }
        setTimeout(this.countDown, 1000);

    }

    countDown = () => {
        if (this.timerDownIsOn === 1) {
            //console.log('wwwwww');
            this.continueDownTimer();
        }
    };


}
