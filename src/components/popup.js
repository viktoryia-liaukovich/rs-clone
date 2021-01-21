import { $, create } from '../utils/utils';

export default function popup(text, buttonText, func) {
  const pageLoss = create('div');
  pageLoss.id = 'timeUp';

  const timeUpText = create('div');
  timeUpText.id = 'timeUp-text';
  timeUpText.innerText = text;

  const newGame = create('button');
  newGame.classList.add('newGame');
  newGame.innerText = buttonText;

  timeUpText.appendChild(newGame);
  pageLoss.appendChild(timeUpText);

  $('#root').appendChild(pageLoss);

  newGame.addEventListener('click', () => {
    $('#root').removeChild(pageLoss);
    func();
  });
}
