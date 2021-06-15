import { ISuperHero } from './../../models/superhero.model';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
import { randomIntegerInRange } from 'src/app/shared-module/functions';
import { SuperHeroesService } from 'src/app/superheroes-module/services/superheros.service';

@Component({
	selector: 'superheroes-search-page',
	templateUrl: './superheroes-search-page.component.html'
})
export class SuperheroesSearchPageComponent implements OnInit {
	superHeroes: ISuperHero[] = [];

	constructor(private superHeroesService: SuperHeroesService) { }

	get superHeroesCount(): number {
		return this.superHeroes.length;
	}

	ngOnInit(): void {
		this.superHeroesService
			.getAll()
			.subscribe(superHeroes => this.superHeroes = superHeroes);
	}

	onRandomSearch(): void {
		const random = Math.floor(Math.random() * this.superHeroesCount);
		const randomHero = this.superHeroes[random];
	}

}
