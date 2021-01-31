import optionsPopup from '../components/optionsPopup';
import { $, create } from '../utils/utils';
import Map from './Map';
import dictionary from '../configs/dictionary';
import { save } from '../utils/saveSystem';
import variables from '../global/variables';

const menuConfig = {
  CONTINUE: dictionary.CONTINUE,
  NEW_GAME: dictionary.NEW_GAME,
  OPTIONS: dictionary.OPTIONS,
  EXIT: dictionary.EXIT,
};

export default function Menu() {
  const menuWrapper = create('div');
  menuWrapper.classList.add('menu');

  const nav = create('nav');

  Object.values(menuConfig).forEach((el) => {
    const li = create('li');

    if (el === menuConfig.CONTINUE && variables.currentLevel === 0) {
      li.classList.add('disabled');
    };

    li.innerText = el;
    nav.appendChild(li);
  });

  nav.addEventListener('click', (e) => {
    switch (e.target.innerText) {
    case menuConfig.NEW_GAME: {
      save({
        currentLevel: 0,
        isDialogFinished: false,
      })

      variables.currentLevel = 0;
      variables.isDialogFinished = false;

      $('#root').innerHTML = '';
      $('#root').appendChild(Map());
      break;
    }
    case menuConfig.CONTINUE: {
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
