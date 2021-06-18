import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: '[superhero-info-list-item]',
	templateUrl: './superhero-info-list-item.component.html'
})
export class SuperheroInfoListItemComponent implements OnInit {
	@Input() label: string;
	@Input() value: string | string[];

	constructor() {}

	ngOnInit(): void {
		if (Array.isArray(this.value)) {
			this.value = this.value.join(', ');
		}

		if (!this.value) {
			this.value = '-';
		}
	}
}
