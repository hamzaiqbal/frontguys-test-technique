import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'superhero-powerstats-chart-bar',
	templateUrl: './superhero-powerstats-chart-bar.component.html'
})
export class SuperheroPowerstatsChartBarComponent implements OnInit {
	@Input() label: string;
	@Input() value: number;

	constructor() { }

	ngOnInit(): void {
	}

}
