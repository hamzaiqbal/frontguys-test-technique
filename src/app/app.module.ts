import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { SuperHeroesModule } from 'src/app/superheroes-module/superheroes.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		SharedModule,
		SuperHeroesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
