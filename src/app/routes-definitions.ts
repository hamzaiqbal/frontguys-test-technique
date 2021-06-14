/**
 * Routes fragments
 */
export const BaseRoutePath = '';
export const SuperHeroesSearchRoutePath = 'superheroes';
export const SuperHeroDetailRoutePath = ':id';


/**
 * Routes full paths
 */
export function getBasePath(): string {
	return BaseRoutePath;
}

export function getSuperHeroesSearchPath(): string {
	return `${getBasePath()}/${SuperHeroesSearchRoutePath}`;
}

export function getSuperHeroDetailPath(id: number): string {
	return `${getSuperHeroesSearchPath()}/${SuperHeroDetailRoutePath.replace(':id', '' + id)}`;
}
