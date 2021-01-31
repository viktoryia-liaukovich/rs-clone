import Konva from 'konva';
import dictionary from '../configs/dictionary';
import { $, create } from '../utils/utils';

export default function hint(items, itemsLayer) {
  let hintBtn = {};
  if (!document.getElementById('hintBtn')) {
    hintBtn = create('button');
    hintBtn.classList.add('hintBtn');
    hintBtn.id = 'hintBtn';
    hintBtn.innerText = dictionary.HINT;

    $('#root').appendChild(hintBtn);
  } else {
    hintBtn = document.getElementById('hintBtn');
  }

  hintBtn.addEventListener('click', () => {
    if (items.length > 0) {
      const angularSpeed = 90;

      const anim = new Konva.Animation(((frame) => {
        const angleDiff = (frame.timeDiff * angularSpeed) / 1000;

        items[0].imageItem.rotate(angleDiff);
      }), itemsLayer);

      anim.start();
      if (items.length === 1) {
        hintBtn.disabled = true;
        hintBtn.classList.add('disabled');
      }
    }
  });

  return hintBtn;
}
