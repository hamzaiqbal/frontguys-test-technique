import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISuperHero } from '@app/superheroes-module/models/superhero.model';

@Component({
	selector: 'superheroes-search-form',
	templateUrl: './superheroes-search-form.component.html'
})
export class SuperheroesSearchFormComponent implements OnInit {
	@Input() superHeroes: ISuperHero[] = [];
	@Input() currentSuperHero: ISuperHero;
	@Output() selectSuperHero: EventEmitter<ISuperHero> = new EventEmitter();

	constructor() {}

	get superHeroesCount(): number {
		return this.superHeroes.length;
	}

	ngOnInit(): void {}

	trackByFn = (superHero: ISuperHero) => {
		return superHero.id;
	}

	onSelect(): void {
		this.selectSuperHero.emit(this.currentSuperHero);
	}

	onRandomSelect(): void {
		const random = Math.floor(Math.random() * this.superHeroesCount);
		this.currentSuperHero = this.superHeroes[random];
		this.onSelect();
	}
}
