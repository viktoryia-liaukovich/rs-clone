import levels from '../configs/levels';
import variables from '../global/variables';
import Level from '../pages/Level';
import Menu from '../pages/Menu';
import { $, create } from '../utils/utils';
import optionsPopup from './optionsPopup';

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

  const popupBtnRestart = create('button');
  popupBtnRestart.classList.add(`${pagePopup.id}__btn`);
  popupBtnRestart.innerText = buttonText === 'New Game' ? 'New Game' : 'Restart';

  const popupBtnMenu = create('button');
  popupBtnMenu.classList.add(`${pagePopup.id}__btn`);
  popupBtnMenu.innerText = 'Main menu';

  const popupBtnLoad = create('button');
  popupBtnLoad.classList.add(`${pagePopup.id}__btn`);
  popupBtnLoad.innerText = 'Load game';

  const popupBtnOptions = create('button');
  popupBtnOptions.classList.add(`${pagePopup.id}__btn`);
  popupBtnOptions.innerText = 'Options';
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
  popupText.appendChild(popupBtnRestart);
  popupText.appendChild(popupBtnMenu);
  popupText.appendChild(popupBtnLoad);
  popupText.appendChild(popupBtnOptions);

  pagePopup.appendChild(popupText);

  $('#root').appendChild(pagePopup);

  popupBtnRestart.addEventListener('click', () => {
    $('#root').removeChild(pagePopup);
    $('#root').innerHTML = '';
    Level(levels[variables.currentLevel]);
  });

  popupBtnMenu.addEventListener('click', () => {
    $('#root').innerHTML = '';
    $('#root').appendChild(Menu());
  });
  popupBtnLoad.addEventListener('click', () => {
    $('#root').removeChild(pagePopup);
  });
  popupBtnOptions.addEventListener('click', () => {
    $('#root').appendChild(optionsPopup());
  });
}
