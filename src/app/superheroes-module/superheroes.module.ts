import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { SuperheroesSearchPageComponent } from '../superheroes-module/pages';
import {
	SuperheroDetailComponent,
	SuperheroesSearchFormComponent,
	SuperheroPowerstatsChartBarComponent,
	SuperheroInfoListItemComponent
} from '../superheroes-module/components';

@NgModule({
	declarations: [
		SuperheroesSearchPageComponent,
		SuperheroesSearchFormComponent,
		SuperheroDetailComponent,
		SuperheroPowerstatsChartBarComponent,
		SuperheroInfoListItemComponent
	],
	imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, TranslateModule]
})
export class SuperHeroesModule {}
