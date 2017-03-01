import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitHubComponent } from "./component/gitHub/gitHubComponent"

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, GitHubComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
