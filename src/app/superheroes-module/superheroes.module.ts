import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuperheroesSearchPageComponent } from './pages/superheroes-search-page/superheroes-search-page.component';
import { SuperheroresSearchFormComponent } from './components/superherores-search-form/superherores-search-form.component';



@NgModule({
	declarations: [SuperheroesSearchPageComponent, SuperheroresSearchFormComponent],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class SuperHeroesModule { }
