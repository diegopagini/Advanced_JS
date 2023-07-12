/** @format */
import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/hero.interface';

export const callbacksComponent = (element: HTMLElement) => {
	const id = '5d86371f1efebc31def272e2';

	findHero(id, (error: string, hero: Hero) => {
		if (error) {
			element.innerHTML = error;
			return;
		}

		element.innerHTML = hero.name;
	});
};

/**
 *
 * @param {string} id
 * @param {(error: string | null, hero: Hero) => void} callback
 */
const findHero = (id: string, callback: Function) => {
	const hero = heroes.find((hero) => hero.id === id);

	if (!hero) {
		callback(`Hero with id ${id} not found.`);
		return;
	}

	callback(null, hero);
};
