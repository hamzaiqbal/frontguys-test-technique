import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuperheroesSearchPageComponent } from './pages/superheroes-search-page/superheroes-search-page.component';
import { SuperheroesSearchFormComponent } from './components/superheroes-search-form/superheroes-search-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SuperheroDetailComponent } from './components/superhero-detail/superhero-detail.component';
import { ChartsModule } from 'ng2-charts';
import { SuperheroPowerstatsComponent } from './components/superhero-powerstats/superhero-powerstats.component';


@NgModule({
	declarations: [SuperheroesSearchPageComponent, SuperheroesSearchFormComponent, SuperheroDetailComponent, SuperheroPowerstatsComponent],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		NgSelectModule,
		TranslateModule,
		ChartsModule
	]
})
export class SuperHeroesModule { }
