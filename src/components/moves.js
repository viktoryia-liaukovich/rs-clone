import { $, create } from '../utils/utils';
import popup from './popup';

import pauseGame from './pauseGame';

export default function moves(count) {
  const move = create('div');
  move.id = 'move';
  move.classList.add(`${move.id}`);

  const countMove = create('span');
  countMove.classList.add((`${move.id}__count`));
  countMove.innerText = count;

  move.appendChild(countMove);
  move.appendChild(pauseGame());

  return move;
}
