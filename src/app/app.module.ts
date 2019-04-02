import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpfLibModule } from 'spf-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SpfLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
