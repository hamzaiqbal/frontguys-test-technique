import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { SuperHerosModule } from 'src/app/superheros-module/superheros.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		SuperHerosModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
