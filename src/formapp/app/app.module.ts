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
import {FlugSuchenComponent} from './flug/flugsuchen.component';
import {FlugService} from './flug/service/flug.service';
import {Http, ConnectionBackend, HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [  BrowserModule,
                UserModule,
                routing,
                HttpModule,
                FormsModule
    ],
    declarations: [ AppComponent,
                    HomeComponent,
                    KontaktComponent,
                    FlugSuchenComponent
    ],
    providers: [ FlugService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
