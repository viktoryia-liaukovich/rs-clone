import { create } from '../utils/utils'

export default function table(items) {
  const table = create('div');
  table.classList.add('table');

  const listItems = create('ul');

  items.forEach(item => {
    const liItem = create('li');
    liItem.innerText = item.name;
    listItems.appendChild(liItem);
  })

  table.appendChild(listItems);
  
  return table;
}