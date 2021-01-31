import { $, create } from '../utils/utils';
import config from '../configs/levels';
import Level from './Level';
import pageLoader from './Loader';
import markerIcon from '../assets/UI/location-pin.png';
import variables from '../global/variables';
import dialogueUI from '../components/UI/dialogueUI';
import { save } from '../utils/saveSystem';

export default function Map() {
  const mapWrapper = create('div');
  mapWrapper.classList.add('map');

  if (!variables.isDialogFinished)  {
    dialogueUI(() => {
      variables.isDialogFinished = true;
      save ({
        isDialogFinished: variables.isDialogFinished,
      })
    }, 'map');
  }

  Object.values(config).forEach((el, i) => {
    const marker = new Image();
    marker.src = markerIcon;

    marker.classList.add('marker');
    marker.style.top = `${el.point.y}px`;
    marker.style.left = `${el.point.x}px`;

    if (i > variables.currentLevel) {
      marker.classList.add('disabled');
    } else if (i === variables.currentLevel) {
      marker.classList.add('current');
    }

    mapWrapper.appendChild(marker);

    marker.addEventListener('click', () => {
      $('#root').innerHTML = '';

      Level(config[i]);

      $('#root').appendChild(pageLoader());
    });
  });

  return mapWrapper;
}
