import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { ISuperHeroPowerstats } from 'src/app/superheroes-module/models/superhero.model';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType, RadialChartOptions } from 'chart.js';

@Component({
	selector: 'superhero-powerstats',
	templateUrl: './superhero-powerstats.component.html'
})
export class SuperheroPowerstatsComponent implements OnInit {
	private _powerstats: ISuperHeroPowerstats;

	@Input() set powerstats(powerstats: ISuperHeroPowerstats) {
		this._powerstats = powerstats;
		this.ngOnInit();
	}

	get powerstats(): ISuperHeroPowerstats {
		return this._powerstats;
	}

	radarChartType: ChartType = 'radar';
	radarChartLabels: Label[] = [];
	radarChartData: SingleDataSet = [];
	radarChartOptions: RadialChartOptions = {
		responsive: true
	};

	constructor(private translateService: TranslateService) { }

	ngOnInit(): void {
		this.radarChartLabels = [];
		this.radarChartData = [];

		Object.keys(this.powerstats).forEach(key => {
			this.radarChartLabels.push(this.translateService.instant(`DetailPage.Powerstats.${key}`));
			this.radarChartData.push(this.powerstats[key]);
		});

	}

}
