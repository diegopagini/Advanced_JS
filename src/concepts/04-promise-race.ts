/** @format */

export const promiseRaceComponent = (element: HTMLElement) => {
	element.innerHTML = 'Loading...';

	const renderValue = (value: string) => {
		element.innerHTML = value;
	};

	Promise.race([
		slowPromise(),
		mediumPromise(),
		mediumPromise(),
		fastPromise(),
		mediumPromise(),
		slowPromise(),
	]).then(renderValue);
};

const slowPromise = (): Promise<string> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('Slow Promise');
		}, 2000);
	});

const mediumPromise = (): Promise<string> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('Medium Promise');
		}, 1500);
	});

const fastPromise = (): Promise<string> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('Fast Promise');
		}, 1000);
	});
