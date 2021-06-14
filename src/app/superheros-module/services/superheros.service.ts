import { environment } from 'src/environments/environment';
import { ISuperHero, ISuperHerosSearchResults } from './../models/superhero.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SuperherosService {

	constructor(private http: HttpClient) {
	}

	search(term: string): Observable<ISuperHerosSearchResults> {
		const url = `${environment.apiUrl}/search/${term}`;

		return this.http.get<ISuperHerosSearchResults>(url);
	}

	get(id: number): Observable<ISuperHero> {
		const url = `${environment.apiUrl}/${id}`;

		return this.http.get<ISuperHero>(url);
	}
}
