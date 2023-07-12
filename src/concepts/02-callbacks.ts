/** @format */
import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/hero.interface';

export const callbacksComponent = (element: HTMLElement) => {
	const id = '5d86371f1efebc31def272e2';
	findHero(id, ({ name }: Hero) => {
		element.innerHTML = name;
	});
};

const findHero = (id: string, callback: Function) => {
	const hero = heroes.find((hero) => hero.id === id);
	callback(hero);
};
