import { environment } from '../../../environments/environment';
import { ISuperHero } from './../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SuperHeroesService {
	constructor(private http: HttpClient) {}

	getAll(): Observable<ISuperHero[]> {
		const url = `${environment.apiUrl}/all.json`;

		return this.http.get<ISuperHero[]>(url);
	}

	getById(id: number): Observable<ISuperHero> {
		const url = `${environment.apiUrl}/id/${id}.json`;

		return this.http.get<ISuperHero>(url);
	}
}
