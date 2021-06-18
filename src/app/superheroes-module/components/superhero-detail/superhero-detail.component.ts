import { ISuperHero } from '@app/superheroes-module/models/superhero.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'superhero-detail',
	templateUrl: './superhero-detail.component.html'
})
export class SuperheroDetailComponent implements OnInit {
	@Input() currentSuperHero: ISuperHero;
	@Output() close: EventEmitter<void> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	onClose(): void {
		this.close.emit();
	}
}
