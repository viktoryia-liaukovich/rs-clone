import { $, create, fadeRoot } from '../utils/utils';
import { save } from '../utils/saveSystem';
import variables from '../global/variables';
import config from '../configs/levels';
import maps_config from '../configs/maps';
import dialogueUI from '../components/UI/dialogueUI';
import Level from './Level';
import pageLoader from './Loader';
import markerIcon from '../assets/UI/location-pin.png';
import button from '../components/button';
import Menu from './Menu';
import dictionary from '../configs/dictionary';
import { playSoundEffect, soundbank } from '../utils/music';

export default function Map() {
  const mapWrapper = create('div');
  mapWrapper.classList.add('map');

  const bgImage = new Image();
  bgImage.onload = () => {
    mapWrapper.style.backgroundImage = `url(${bgImage.src})`;
    $('#root').classList.remove('fade');
  }
  bgImage.src = maps_config[variables.lastLevel];

  if (!variables.isDialogFinished) {
    dialogueUI(() => {
      variables.isDialogFinished = true;
      save({
        isDialogFinished: variables.isDialogFinished,
      });
    }, 'map');
  }

  Object.values(config).forEach((el, i) => {
    const marker = new Image();
    marker.src = markerIcon;

    marker.classList.add('marker');
    marker.style.top = `${el.point.y}px`;
    marker.style.left = `${el.point.x}px`;

    if (i > variables.lastLevel) {
      marker.classList.add('disabled');
    } else if (i === variables.lastLevel) {
      marker.classList.add('current');
    }

    mapWrapper.appendChild(marker);

    marker.addEventListener('click', () => {
      variables.currentLevel = i;

      playSoundEffect(soundbank.loader);

      fadeRoot(() => {
        $('#root').innerHTML = '';
        Level(config[i]);
        $('#root').appendChild(pageLoader());
      });
    });
  });

  mapWrapper.appendChild(button(dictionary.BACK_TO_MENU, () => {
    fadeRoot(() => {
      $('#root').innerHTML = '';
      $('#root').appendChild(Menu());
    });
  }, 'menu'));

  return mapWrapper;
}
