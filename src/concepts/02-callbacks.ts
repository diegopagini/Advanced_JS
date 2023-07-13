/** @format */
import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/hero.interface';

export const callbacksComponent = (element: HTMLElement) => {
	const id = '5d86371f1efebc31def272e2';
	const id2 = '5d86371f25a058e5b1c8a65e';

	findHero(id, (error: string, hero1: Hero) => {
		if (error) {
			element.innerHTML = error;
			return;
		}

		findHero(id2, (error: string, hero2: Hero) => {
			if (error) {
				element.innerHTML = error;
				return;
			}

			element.innerHTML = `${hero1.name} / ${hero2.name}`;
		});
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
