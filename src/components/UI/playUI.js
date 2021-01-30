import table from '../table';
import { $ } from '../../utils/utils';
import timer from '../timer';
import hint from '../hint';
import variables from '../../global/variables';
import moves from '../moves';

let tableEl = null;
let countMove = null;
export function playUI({
  levelItems, move, time, itemsLayer,
}) {
  tableEl = $('#root').appendChild(table(levelItems));

  if (variables.childMode) {
    countMove = $('#root').appendChild(moves(move));
  } else {
    timer(time);
  }

  hint(levelItems, itemsLayer);
}

export function updateTable(newItems) {
  $('#root').removeChild(tableEl);
  tableEl = $('#root').appendChild(table(newItems));
}

export function updateMoves(newMove) {
  $('#root').removeChild(countMove);
  countMove = $('#root').appendChild(moves(newMove));
}
