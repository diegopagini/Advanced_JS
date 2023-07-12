/** @format */

export const environmentsComponent = (element: HTMLDivElement) => {
	console.log(import.meta.env); /*
    {
    "BASE_URL": "/",
    "MODE": "development",
    "DEV": true,
    "PROD": false,
    "SSR": false
    }
   */

	const html = `
    Dev: ${import.meta.env.DEV} <br/>
    Prod: ${import.meta.env.PROD} <br/>
    BaseUrl: ${import.meta.env.VITE_BASE_URL} <br/>
    Api Key: ${import.meta.env.VITE_API_KEY} <br/>

  `;
	element.innerHTML = html;
};
