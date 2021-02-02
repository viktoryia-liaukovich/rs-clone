import Konva from 'konva';
import dictionary from '../configs/dictionary';
import { $, create } from '../utils/utils';
import button from './button';

export default function hint(items, itemsLayer) {
  const hintBtn = button(dictionary.HINT, () => {
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
  }, 'hint');

  return hintBtn;
}
