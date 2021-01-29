import { $, create } from '../utils/utils';
import popup from './popup';
import Lost from '../assets/popup/lost.gif';

export default function moves(count) {
  const move = create('div');
  move.id = 'move';
  move.classList.add(`${move.id}`);

  const countMove = create('span');
  countMove.classList.add((`${move.id}__count`));
  countMove.innerHTML = '0';

  move.appendChild(countMove);

  $('#root').appendChild(move);

  document.getElementsByTagName('div')[0].onclick = function () {
    if (count === 0) {
      $('#root').removeChild(move);
      popup({
        title: 'Game away!',
        buttonText: 'New Game',
        image: Lost,
      });
    } else {
      countMove.innerHTML = `${count--}`;
    }
  };
}
