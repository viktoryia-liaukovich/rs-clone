import { changeMusicVolume, changeSoundsVolume, playMenuMusic } from '../utils/music';
import { create } from '../utils/utils';
import button from './button';
import { load } from '../utils/saveSystem';
import dictionary from '../configs/dictionary';
import variables from '../global/variables';

export default function startupModal() {
  const modal = create('div');
  modal.classList.add('modal');

  const modalContent = create('div');
  modalContent.classList.add('modal--content');

  const title = create('h2');
  title.innerText = dictionary.STARTUP_QUERY_TITLE;

  const buttons = create('div');
  buttons.classList.add('buttons-wrapper');

  variables.sounds = "0";
  variables.music = "0";

  buttons.appendChild(button(dictionary.ACCEPT, () => {
    changeMusicVolume(Number(load().music) || "0.1");
    changeSoundsVolume(Number(load().sounds) || "0.1");
    playMenuMusic();

    modal.classList.add('fade');
    setTimeout(() => modal.remove(), 250);
  }, 'accept'));

  buttons.appendChild(button(dictionary.DECLINE, () => {
    changeMusicVolume('0');
    changeSoundsVolume('0');

    modal.classList.add('fade');
    setTimeout(() => modal.remove(), 250);
  }, 'decline'));

  modalContent.appendChild(title);
  modalContent.appendChild(buttons);
  modal.appendChild(modalContent);

  return modal;
}
