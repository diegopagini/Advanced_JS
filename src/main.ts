/** @format */
import './style.css';

import { callbacksComponent } from './concepts/02-callbacks';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>

  <div class="card"></div>  
  </div>
`;

const element = document.querySelector('.card') as HTMLDListElement;
// environmentsComponent(element);

callbacksComponent(element);
