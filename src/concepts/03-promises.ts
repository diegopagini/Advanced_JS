/** @format */
import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/hero.interface';

export const promisesComponent = (element: HTMLElement) => {
	const id = '5d86371f1efebc31def272e2';

	findHero(id).then((hero) => {
		element.innerHTML = hero.name;
	});
};

const findHero = (id: string): Promise<Hero> => {
	return new Promise((resolve, reject) => {
		const hero = heroes.find((el: Hero) => el.id === id);
		if (hero) {
			resolve(hero);
			return;
		}

		reject(`Hero with id ${id} not found`);
	});
};
