/** @format */
import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/hero.interface';

export const promisesComponent = (element: HTMLElement) => {
	const id = '5d86371f1efebc31def272e2';
	const id2 = '5d86371f25a058e5b1c8a65e';

	const renderTwoHeros = (hero1: Hero, hero2: Hero) => {
		element.innerHTML = `
    <h3>${hero1.name}</h3>
    <h3>${hero2.name}</h3>
  `;
	};

	// Promise Hell
	// findHero(id)
	// 	.then((hero) => {
	// 		hero1 = hero;
	// 		findHero(id2)
	// 			.then((hero2) => {
	// 				renderTwoHeros(hero1, hero2);
	// 			})
	// 			.catch((error: string) => {
	// 				element.innerHTML = error;
	// 			});
	// 	})
	// 	.catch((error: string) => {
	// 		element.innerHTML = error;
	// 	});

	// Solution
	Promise.all([findHero(id), findHero(id2)]).then(([hero1, hero2]) => renderTwoHeros(hero1, hero2));
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
