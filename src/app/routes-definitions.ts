/**
 * Routes fragments
 */
export const BaseRoutePath = '';
export const SuperHeroesSearchRoutePath = 'superheroes';


/**
 * Routes full paths
 */
export function getBasePath(): string {
	return BaseRoutePath;
}

export function getSuperHeroesSearchPath(): string {
	return `${getBasePath()}/${SuperHeroesSearchRoutePath}`;
}
