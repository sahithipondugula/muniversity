import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminhomebodyComponent } from './adminhomebody/adminhomebody.component';
import { IntroComponent } from './intro/intro.component';
import { CultureComponent } from './culture/culture.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { EventsComponent } from './events/events.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminhomebodyComponent,
    IntroComponent,
    CultureComponent,
    EncyclopediaComponent,
    EventsComponent,
    ClientinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
