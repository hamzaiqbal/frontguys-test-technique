import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuperheroesSearchPageComponent } from './pages/superheroes-search-page/superheroes-search-page.component';



@NgModule({
	declarations: [SuperheroesSearchPageComponent],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class SuperHeroesModule { }
