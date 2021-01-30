import { create } from '../utils/utils';

export default function button(text, callback, mod = null) {
  const buttonEl = create('button');
  buttonEl.classList.add('button');

  if (mod) {
    buttonEl.classList.add(`button_${mod}`);
  }

  buttonEl.textContent = text;

  buttonEl.onclick = callback;

  return buttonEl;
}