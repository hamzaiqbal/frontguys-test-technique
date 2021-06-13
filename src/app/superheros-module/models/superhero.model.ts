import { IApiReponse } from 'src/app/shared-module/models';
import { SuperHeroAlignment, SuperHeroGender } from 'src/app/superheros-module/enums';

export interface ISuperHerosSearchResults extends IApiReponse {
	'results-for': string;
	results: ISuperHero[];
}

export interface ISuperHero {
	id: number;
	name: string;
	powerstats: ISuperHeroPowerstats;
	appearance: ISuperHeroAppearance;
	biography: ISuperHeroBiography;
	work: ISuperHeroWork;
	connections: ISuperHeroConnections;
	image: ISuperHeroImage;
}

export interface ISuperHeroPowerstats {
	intelligence: number;
	strength: number;
	speed: number;
	durability: number;
	power: number;
	combat: number;
}

export interface ISuperHeroAppearance {
	gender: SuperHeroGender;
	race: string;
	height: [string, string];
	weight: [string, string];
	eyeColor: string;
	hairColor: string;
}

export interface ISuperHeroBiography {
	fullName: string;
	alterEgos: string;
	aliases: string[];
	placeOfBirth: string;
	firstAppearance: string;
	publisher: string;
	alignment: SuperHeroAlignment;
}

export interface ISuperHeroWork {
	occupation: string;
	base: string;
}

export interface ISuperHeroConnections {
	groupAffiliation: string;
	relatives: string;
}

export interface ISuperHeroImage {
	url: string;
}
