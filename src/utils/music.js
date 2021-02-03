import menuSound from '../assets/sounds/menu.mp3';
import loaderSound from '../assets/sounds/loader.mp3';
import hoverSound from '../assets/sounds/hover.wav';

import { save } from './saveSystem';
import variables from '../global/variables';

export const soundbank = {
  loader: new Audio(loaderSound),
  hover: new Audio(hoverSound),
};

export const musicbank = {
  menu: new Audio(menuSound),
};

export function playMenuMusic() {
  musicbank.menu.play();
}

export function playOnHoverSound() {
  const audio = new Audio(hoverSound);
  audio.volume = variables.sounds;
  audio.play();
}

export function changeMusicVolume(value) {
  Object.values(musicbank).forEach((el) => {
    el.volume = value;
  });

  variables.music = value;

  save({
    music: value,
  });
}

export function changeSoundsVolume(value) {
  Object.values(soundbank).forEach((el) => {
    el.volume = value;
    playMenuMusic();
  });

  variables.sounds = value;

  save({
    sounds: value,
  });
}
