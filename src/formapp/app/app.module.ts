/**
 * Created by hkfq4 on 30.11.2016.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {UserModule} from "./user/user.module";
import {routing} from "./app.routing";


@NgModule({
    imports: [  BrowserModule,
                UserModule,
                routing
    ],
    declarations: [ AppComponent,
                    HomeComponent,
                    KontaktComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
