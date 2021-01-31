import { $, create } from '../utils/utils';
import config from '../configs/levels';
import Level from './Level';
import pageLoader from './Loader';
import markerIcon from '../assets/UI/location-pin.png';
import variables from '../global/variables';

export default function Map() {
  const mapWrapper = create('div');
  mapWrapper.classList.add('map');

  Object.values(config).forEach((el, i) => {
    const marker = new Image();
    marker.src = markerIcon;

    marker.classList.add('marker');
    marker.style.top = `${el.point.y}px`;
    marker.style.left = `${el.point.x}px`;

    mapWrapper.appendChild(marker);

    marker.addEventListener('click', () => {
      $('#root').innerHTML = '';

      variables.currentLevel = i;

      Level(config[i]);

      $('#root').appendChild(pageLoader());
    });
  });

  return mapWrapper;
}
