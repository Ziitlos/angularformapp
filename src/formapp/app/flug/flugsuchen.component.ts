/**
 * Created by hkfq4 on 27.03.2017.
 */


import {Component} from '@angular/core';
import {Flug} from '../entities/flug';
import {FlugService} from './service/flug.service';

@Component({
    moduleId: module.id,
    selector: 'flugsuchen',
    templateUrl: 'flugsuchen.component.html'
})

export  class FlugSuchenComponent {

    public von: string = "Graz";
    public  nach: string = "Hamburg";
    public selectedFlug: Flug;
    public fluege: Array<Flug> = [];

    constructor(private flugService: FlugService) {  }

    suchen() {
        this.flugService
            .find(this.von, this.nach)
            .subscribe(
                (fluege: Flug[]) => {
                    this.fluege = fluege;
                },
                (err) => {
                    console.error("Fehler beim Laden von Flügen!");
                    console.error(err);
                }
            );
    }

    select(flug: Flug): void {
        this.selectedFlug = flug;
    }
}
