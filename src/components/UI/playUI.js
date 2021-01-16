import table from "../table";
import { $ } from "../../utils/utils"

let tableEl = null;

export function playUI(items) {
  tableEl = $('#root').appendChild(table(items));
}

export function updateTable(newItems) {
  $('#root').removeChild(tableEl);
  tableEl = $('#root').appendChild(table(newItems));
}