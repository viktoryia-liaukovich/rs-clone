import table from '../table';
import { $ } from '../../utils/utils';
import timer from '../timer';
import hint from '../hint';
import variables from '../../global/variables';

let tableEl = null;

export function playUI({levelItems, move, time, itemsLayer}) {
  tableEl = $('#root').appendChild(table(levelItems));

  if (variables.childMode) {
    moves(move);
  } else {
    timer(time);
  }

  hint(levelItems, itemsLayer);
}

export function updateTable(newItems) {
  $('#root').removeChild(tableEl);
  tableEl = $('#root').appendChild(table(newItems));
}
