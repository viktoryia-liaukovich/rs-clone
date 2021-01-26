import optionsPopup from '../components/optionsPopup';
import { $, create } from '../utils/utils';
import { playMenuMusic } from '../utils/music';
import Map from './Map';

const menuConfig = {
  NEW_GAME: 'New game',
  CONTINUE: 'Continue',
  OPTIONS: 'Options',
  EXIT: 'Exit game',
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
    playMenuMusic();
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
    }
  });

  menuWrapper.appendChild(nav);

  return menuWrapper;
}
