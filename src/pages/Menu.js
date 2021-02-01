import optionsPopup from '../components/optionsPopup';
import { $, append, create, fadeRoot } from '../utils/utils';
import Map from './Map';
import dictionary from '../configs/dictionary';
import { save } from '../utils/saveSystem';
import variables from '../global/variables';

import logo_en from '../assets/UI/logo_en.png';
import logo_ru from '../assets/UI/logo_ru.png';

const logo_map = {
  en: logo_en,
  ru: logo_ru,
  by: logo_en,
};

const menuConfig = {
  CONTINUE: dictionary.CONTINUE,
  NEW_GAME: dictionary.NEW_GAME,
  OPTIONS: dictionary.OPTIONS,
  EXIT: dictionary.EXIT,
};

export default function Menu() {
  const menuWrapper = create('div');
  menuWrapper.classList.add('menu');

  const logo = new Image();
  logo.classList.add('logo');
  logo.src = logo_map[variables.lang];

  const nav = create('nav');
  const ul = create('ul');

  const version = create('p');
  version.classList.add('version');
  version.innerText = `v ${variables.version}`;

  append([logo, ul, version], nav);

  Object.values(menuConfig).forEach((el) => {
    const li = create('li');

    if (el === menuConfig.CONTINUE && variables.lastLevel === 0) {
      li.classList.add('disabled');
    }

    li.innerText = el;
    ul.appendChild(li);
  });

  nav.addEventListener('click', (e) => {
    switch (e.target.textContent) {
    case menuConfig.NEW_GAME: {
      fadeRoot(() => {
        $('#root').innerHTML = '';
        $('#root').appendChild(Map());
      });

      save({
        lastLevel: 0,
        isDialogFinished: false,
      });

      variables.lastLevel = 0;
      variables.isDialogFinished = false;

      break;
    }
    case menuConfig.CONTINUE: {
      fadeRoot(() => {
        $('#root').innerHTML = '';
        $('#root').appendChild(Map());
      });
      break;
    }
    case menuConfig.OPTIONS: {
      $('#root').appendChild(optionsPopup());
      break;
    }
    case menuConfig.EXIT: {
      window.close();
      break;
    }
    default: break;
    }
  });

  menuWrapper.appendChild(nav);

  return menuWrapper;
}
