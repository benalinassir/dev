import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { SidbarComponent } from './shared/sidbar/sidbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidbarComponent
    ],
  imports: [
    BrowserModule,
   AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
