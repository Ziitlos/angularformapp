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

export class HomeComponent implements OnDestroy {

    public source: Observable<any>;
    private sourcesubscription: Subscription;
    private countUpDisp = 0;
    private countDownDisp = 60000;
    private deinTick;
    private counterUp = 1;
    private counterDown = 60;

    ngOnDestroy(): void {
        this.sourcesubscription.unsubscribe();
    }

    countUp(): void {
        console.log('Count Up läuft');
        var counterUpMs = this.counterUp * 1000;
        this.countUpDisp = counterUpMs;
        this.counterUp++;
    }

    countDown(): void {
        console.log('Count Down läuft');
        var counterDownMs = this.counterDown * 1000;
        this.countDownDisp = counterDownMs;
        this.counterDown--;
    }

    startZeit() {

        console.log('GESTARTET');
        this.deinTick = 'GESTARTET';

        this.source = Observable.interval(1000)
            .timeInterval();
          //.tick(5);

        this.sourcesubscription = this.source.subscribe(
             (y) => {
                console.log('MyTick ' + y.value + ' / ' + y.interval);
                //this.countUpDisp = y.value * 1000;
                this.countUpDisp = 0;
                 this.countUp();
                 this.countDownDisp = 60000;
                this.countDown();
            },
            function (err) {
                console.log('Error: ' + err);
            },
            () => {
                console.log('Fertig :-)');
                //this.countUpDisp = 'fertig';
            }
        );
    }

    stopZeit(): void {
        console.log('GESTOPPT');
        this.deinTick = 'GESTOPPT';
        this.sourcesubscription.unsubscribe();
    }


}

