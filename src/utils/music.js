import menu from '../assets/sounds/menu.mp3';
import main from '../assets/sounds/main2.mp3';
import loader from '../assets/sounds/loader.mp3';
import hover from '../assets/sounds/hover.wav';
import hint from '../assets/sounds/hint.mp3';
import news from '../assets/sounds/news.mp3';
import victory from '../assets/sounds/victory.wav';
import whoosh from '../assets/sounds/whoosh.mp3';

import { save } from './saveSystem';
import variables from '../global/variables';

export const soundbank = {
  loader: loader,
  hover: hover,
  hint: hint,
  win: news,
  victory: victory,
  map: whoosh,
};

export const musicbank = {
  menu: new Audio(menu),
  main: new Audio(main),
};

export function playMenuMusic() {
  if (musicbank.main.paused || musicbank.menu.paused) {
    musicbank.main.play();

    musicbank.main.onended = () => {
      musicbank.menu.play();

      musicbank.menu.onended = () => {
        musicbank.main.play();
      }
    }
  }
}

export function stopMainMusic() {
  console.log('stop');
  Object.values(musicbank).forEach(el => el.pause());
}

export function playSoundEffect(effect) {
  const audio = new Audio(effect);
  audio.volume = variables.sounds;
  audio.play();
}

export function changeMusicVolume(value) {
  Object.values(musicbank).forEach((el) => {
    el.volume = value;

    if (Object.values(musicbank).some(el => !el.paused)) {
      playMenuMusic();
    }
  });

  variables.music = value;

  save({
    music: value,
  });
}

export function changeSoundsVolume(value) {
  variables.sounds = value;

  save({
    sounds: value,
  });
}
