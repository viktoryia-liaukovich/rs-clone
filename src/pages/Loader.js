import dictionary from '../configs/dictionary';
import { create } from '../utils/utils';

export default function pageLoader() {
  const loader = create('div');
  loader.id = 'loader';
  loader.classList.add(loader.id);

  const loaderImage = create('div');
  loaderImage.classList.add(`${loader.id}__image`);

  const loaderText = create('p');
  loaderText.classList.add(`${loader.id}__text`);
  loaderText.innerText = dictionary.LOADING;

  loaderImage.appendChild(loaderText);
  loader.appendChild(loaderImage);

  setTimeout(() => {
    const node = document.getElementById(loader.id);
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }, 2000);

  return loader;
}
