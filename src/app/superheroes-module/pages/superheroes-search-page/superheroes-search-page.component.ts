import { Component, OnInit } from '@angular/core';
import { ISuperHero } from '@app/superheroes-module/models/superhero.model';
import { SuperHeroesService } from '@app/superheroes-module/services/superheros.service';
import { catchError, finalize, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'superheroes-search-page',
	templateUrl: './superheroes-search-page.component.html'
})
export class SuperheroesSearchPageComponent implements OnInit {
	superHeroes: ISuperHero[] = [];
	currentSuperHero: ISuperHero;

	isLoading: boolean = true;
	hasError: boolean = false;

	get isLoaded(): boolean {
		return this.superHeroes.length > 0;
	}

	constructor(private superHeroesService: SuperHeroesService) {}

	ngOnInit(): void {
		this.superHeroesService
			.getAll()
			.pipe(
				tap(superHeroes => (this.superHeroes = superHeroes)),
				finalize(() => (this.isLoading = false)),
				catchError(e => {
					this.hasError = true;
					return of(e);
				})
			)
			.subscribe();
	}

	onSelectSuperHero(superHero: ISuperHero): void {
		this.currentSuperHero = superHero;
	}

	onResetSuperHero(): void {
		this.currentSuperHero = null;
	}
}
