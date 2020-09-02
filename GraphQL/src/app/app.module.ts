import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { ShipModule } from './home/ship/ship.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        HomeModule,
        HomeRoutingModule,
        ShipModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
