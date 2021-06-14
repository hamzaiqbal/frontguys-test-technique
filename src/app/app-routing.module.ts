import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as RoutesDefinitions from 'src/app/routes-definitions';
import { SuperheroesSearchPageComponent } from 'src/app/superheroes-module/pages';

const routes: Routes = [
	{
		path: RoutesDefinitions.SuperHeroesSearchRoutePath,
		component: SuperheroesSearchPageComponent,
		data: { },
	},

	// Redirects to search page
	{
		path: '',
		pathMatch: 'prefix',
		redirectTo: RoutesDefinitions.getSuperHeroesSearchPath()
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
