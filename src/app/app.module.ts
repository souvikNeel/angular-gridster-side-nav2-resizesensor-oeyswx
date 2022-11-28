import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { GridsterModule } from 'angular-gridster2';

import {MatSidenavModule} from '@angular/material';
import { TileComponent } from './tile/tile.component';

import { AngularResizedEventModule } from 'angular-resize-event';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, GridsterModule, MatSidenavModule, AngularResizedEventModule ],
  declarations: [ AppComponent, TileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
