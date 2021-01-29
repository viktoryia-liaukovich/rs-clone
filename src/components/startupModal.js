import { changeMusicVolume, changeSoundsVolume, playMenuMusic } from '../utils/music';
import { create } from '../utils/utils';
import button from './button';

export default function startupModal() {
  const modal = create('div');
  modal.classList.add('modal');

  const modalContent = create('div');
  modalContent.classList.add('modal--content');

  const title = create('h2');
  title.innerText = 'TURN ON SOUNDS?';

  const buttons = create('div');
  buttons.classList.add('buttons-wrapper');

  buttons.appendChild(button('Yes', () => {
    changeMusicVolume('1');
    changeSoundsVolume('1');
    playMenuMusic();
    modal.remove();
  }, 'accept'))
  buttons.appendChild(button('No', () => {
    changeMusicVolume('0');
    changeSoundsVolume('0');
    modal.remove();
  }, 'decline'))

  modalContent.appendChild(title);
  modalContent.appendChild(buttons);
  modal.appendChild(modalContent);

  return modal;
}