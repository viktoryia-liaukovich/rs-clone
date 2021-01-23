import { $, create } from '../utils/utils';
import config from '../configs/levels';
import Level from './Level';
import pageLoader from '../components/pageLoader';

export default function Map() {
  const mapWrapper = create('div');
  mapWrapper.classList.add('map');

  Object.values(config).forEach((el, i) => {
    const marker = create('span');

    marker.classList.add('marker');
    marker.style.top = `${el.point.y}px`;
    marker.style.left = `${el.point.x}px`;

    mapWrapper.appendChild(marker);

    marker.addEventListener('click', () => {
      $('#root').innerHTML = '';
      Level(config[i + 1]);
      $('#root').appendChild(pageLoader());
    });
  });

  return mapWrapper;
}
