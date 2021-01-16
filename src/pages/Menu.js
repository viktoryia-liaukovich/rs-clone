import { $, create } from '../utils/utils';
import Level from './Level';
import config from '../configs/levels';

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
        switch(e.target.innerText) {
            case menuConfig.NEW_GAME: {
                $('#root').innerHTML = '';
                $('#root').appendChild(Level(config[1]));
                break;
            }
        }
    })
  
    menuWrapper.appendChild(nav);
  
    return menuWrapper;
  }
  