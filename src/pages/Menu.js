import optionsPopup from '../components/optionsPopup';
import { $, create } from '../utils/utils';
import Map from './Map';
import dictionary from '../configs/dictionary';

const menuConfig = {
  NEW_GAME: dictionary.NEW_GAME,
  CONTINUE: dictionary.CONTINUE,
  OPTIONS: dictionary.OPTIONS,
  EXIT: dictionary.EXIT,
};

export default function Menu() {
  const menuWrapper = create('div');
  menuWrapper.classList.add('menu');

  const nav = create('nav');

  Object.values(menuConfig).forEach((el) => {
    const li = create('li');
    li.innerText = el;
    nav.appendChild(li);
  });

  nav.addEventListener('click', (e) => {
    switch (e.target.innerText) {
    case menuConfig.NEW_GAME: {
      $('#root').innerHTML = '';
      $('#root').appendChild(Map());
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
