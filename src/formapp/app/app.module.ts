/**
 * Created by hkfq4 on 30.11.2016.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserModule} from './user/user.module';
import {routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {FlugSuchenComponent} from './flug/flugsuchen/flugsuchen.component';
import {FlugService} from './flug/service/flug.service';
import {OrtValidatorDirective} from './validators/simple-ort.validator';
import {OrtAsyncValidatorDirective} from './validators/ort-async.validator.directive';
import {AnredeValidatorDirective} from './validators/simple-anrede.validator';
import {KantonValidatorDirective} from './validators/kanton.validator.directive';


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
                    FlugSuchenComponent,
                    OrtValidatorDirective,
                    OrtAsyncValidatorDirective,
                    AnredeValidatorDirective,
                    KantonValidatorDirective
    ],
    providers: [ FlugService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
