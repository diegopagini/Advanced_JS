/** @format */
import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/hero.interface';

export const forAwaitComponent = async (element: HTMLElement) => {
	const heroIds = heroes.map((hero) => hero.id);
	const heroPromises = getHeroesAsync(heroIds);

	for await (const hero of heroPromises) {
		element.innerHTML += `${hero.name} <br/> `;
	}
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds: string[]) => {
	const heroPromises: any = [];

	heroIds.forEach((id) => {
		heroPromises.push(getHeroAsync(id));
	});

	return heroPromises;
};

const getHeroAsync = async (id: string): Promise<Hero> => {
	await new Promise((resolve) => {
		setTimeout(() => resolve(null), 1000);
	});

	return heroes.find((hero) => hero.id === id) as Hero;
};
