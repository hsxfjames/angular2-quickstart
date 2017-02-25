import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from '../pages/dashboard/dashboard.component';
import { HeroListComponent }    from '../pages/hero-list/hero-list.component';
import { HeroDetailComponent }  from '../pages/hero-detail/hero-detail.component';

import { HeroService }          from '../providers/heroes/hero.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})
export class AppModule { }
