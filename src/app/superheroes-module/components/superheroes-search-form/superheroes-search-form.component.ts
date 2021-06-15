import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'superheroes-search-form',
	templateUrl: './superheroes-search-form.component.html'
})
export class SuperheroesSearchFormComponent implements OnInit {
	@Output() randomSuperHero: EventEmitter<void> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}
}
