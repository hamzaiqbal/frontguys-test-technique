import { Component, OnInit } from '@angular/core';
import { ISuperHero } from 'src/app/superheroes-module/models/superhero.model';
import { SuperHeroesService } from 'src/app/superheroes-module/services/superheros.service';

@Component({
	selector: 'superheroes-search-page',
	templateUrl: './superheroes-search-page.component.html'
})
export class SuperheroesSearchPageComponent implements OnInit {
	superHeroes: ISuperHero[] = [];
	currentSuperHero: ISuperHero;

	constructor(private superHeroesService: SuperHeroesService) { }

	ngOnInit(): void {
		this.superHeroesService
			.getAll()
			.subscribe(superHeroes => this.superHeroes = superHeroes);
	}

	onSelectSuperHero(superHero: ISuperHero): void {
		this.currentSuperHero = superHero;
	}

}
