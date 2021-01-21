import { $, create } from '../utils/utils';

export default function popup(text, buttonText, func) {
  const pagePopup = create('div');
  pagePopup.id = 'popup';

  const popupText = create('div');
  popupText.id = 'popup-text';
  popupText.innerText = text;

  const btnPopup = create('button');
  btnPopup.classList.add('btnPopup');
  btnPopup.innerText = buttonText;

  popupText.appendChild(btnPopup);
  pagePopup.appendChild(popupText);

  $('#root').appendChild(pagePopup);

  btnPopup.addEventListener('click', () => {
    $('#root').removeChild(pagePopup);
    func();
  });
}
