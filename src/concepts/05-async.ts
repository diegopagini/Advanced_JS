/** @format */
import { heroes } from '../data/heroes';

export const asyncComponent = (element: HTMLElement) => {
	const id1 = '5d86371f1efebc31def272e2';
	console.log('Inicio de componente');

	findHero(id1)
		.then((name) => (element.innerHTML = name))
		.catch((error) => (element.innerHTML = error));

	console.log('Fin del componente');
};

const findHero = async (id: string) => {
	const hero = heroes.find((hero) => hero.id === id);
	if (!hero) throw `Hero with id ${id} not found`;

	return hero.name;
};
