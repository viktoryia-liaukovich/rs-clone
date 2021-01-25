import { $, create } from '../utils/utils';

export default function popup(text, buttonText, image, func) {
  const pagePopup = create('div');
  pagePopup.id = 'popup';

  const popupText = create('div');
  popupText.id = `${pagePopup.id}__text`;
  popupText.innerText = text;

  const popupImage = create('img');
  popupImage.classList.add(`${pagePopup.id}__img`);
  popupImage.src = image;

  const popupBtn = create('button');
  popupBtn.classList.add(`${pagePopup.id}__btn`);
  popupBtn.innerText = buttonText;

  popupText.appendChild(popupImage);
  popupText.appendChild(popupBtn);
  pagePopup.appendChild(popupText);

  $('#root').appendChild(pagePopup);

  popupBtn.addEventListener('click', () => {
    $('#root').removeChild(pagePopup);
    func();
  });
}
