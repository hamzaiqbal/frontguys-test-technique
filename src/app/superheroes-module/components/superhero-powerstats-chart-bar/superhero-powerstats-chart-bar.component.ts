import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'superhero-powerstats-chart-bar',
	templateUrl: './superhero-powerstats-chart-bar.component.html'
})
export class SuperheroPowerstatsChartBarComponent implements OnInit {
	@Input() label: string;
	@Input() value: number = 0;

	rangeClass: 'high' | 'average' | 'low' = 'low';

	constructor() { }

	ngOnInit(): void {
		this.rangeClass = this.value > 60 ? 'high' : (this.value > 30 ? 'average' : 'low');
	}
}
