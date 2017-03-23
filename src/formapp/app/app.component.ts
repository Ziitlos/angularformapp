/**
 * Created by hkfq4 on 30.11.2016.
 */

import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {

    constructor() {
        console.log("console.log: Hello Component Vorlage (app.component.ts).");
    }
}


