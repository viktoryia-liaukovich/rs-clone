import levels from '../configs/levels';
import variables from '../global/variables';
import Level from '../pages/Level';
import Menu from '../pages/Menu';
import { $, create } from '../utils/utils';
import optionsPopup from './optionsPopup';

const popupButtons = {
  RESTART: 'Restart',
  MENU: 'Main menu',
  OPTIONS: 'Options',
  LOAD: 'Load game',

};

export default function popup({
  title, buttonText, image, callback,
}) {
  const pagePopup = create('div');
  pagePopup.id = 'popup';

  const popupText = create('div');
  popupText.id = 'popup__text';
  popupText.innerText = title;

  const popupImage = create('img');
  popupImage.classList.add(`${pagePopup.id}__img`);
  popupImage.src = image;

  if (buttonText !== 'New Game') {
    const popupBtn = create('button');
    popupBtn.classList.add(`${pagePopup.id}__btn`);
    popupBtn.innerText = buttonText;

    popupText.appendChild(popupBtn);

    popupBtn.addEventListener('click', () => {
      $('#root').removeChild(pagePopup);
      callback();
    });
  }

  popupText.appendChild(popupImage);

  Object.values(popupButtons).forEach((el) => {
    const btn = create('button');
    btn.classList.add(`${pagePopup.id}__btn`);
    btn.innerText = el;
    popupText.appendChild(btn);
  });

  popupText.addEventListener('click', (e) => {
    switch (e.target.innerText) {
    case popupButtons.MENU: {
      $('#root').innerHTML = '';
      $('#root').appendChild(Menu());
      break;
    }
    case popupButtons.OPTIONS: {
      $('#root').appendChild(optionsPopup());
      break;
    }
    case popupButtons.LOAD: {
      break;
    }
    case popupButtons.RESTART: {
      $('#root').removeChild(pagePopup);
      $('#root').innerHTML = '';
      Level(levels[variables.currentLevel]);
      break;
    }
    }
  });

  pagePopup.appendChild(popupText);

  $('#root').appendChild(pagePopup);
}
