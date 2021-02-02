import dictionary from '../configs/dictionary';
import levels from '../configs/levels';
import variables from '../global/variables';
import Level from '../pages/Level';
import Menu from '../pages/Menu';
import { $, create, fadeRoot } from '../utils/utils';
import optionsPopup from './optionsPopup';

const popupButtons = {
  RESTART: dictionary.RESTART,
  MENU: dictionary.MENU,
  OPTIONS: dictionary.OPTIONS,
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

  if (buttonText !== dictionary.NEW_GAME) {
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
      fadeRoot(() => {
        $('#root').innerHTML = '';
        $('#root').appendChild(Menu());
      })
      break;
    }
    case popupButtons.OPTIONS: {
      $('#root').appendChild(optionsPopup());
      break;
    }
    case popupButtons.RESTART: {
      fadeRoot(() => {
        $('#root').removeChild(pagePopup);
        $('#root').innerHTML = '';
        Level(levels[variables.currentLevel]);
      });
      break;
    }
    }
  });

  pagePopup.appendChild(popupText);

  $('#root').appendChild(pagePopup);
}
