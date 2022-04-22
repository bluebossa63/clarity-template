import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { CmdbListComponent } from './cmdb-list/cmdb-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'event-list', component: EventListComponent },
    { path: 'cmdb-list', component: CmdbListComponent }
];


@NgModule( {
    declarations: [
        AppComponent,
        EventListComponent,
        CmdbListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ClarityModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(
                appRoutes,
                { enableTracing: true } // <-- debugging purposes only   
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }