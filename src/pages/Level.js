import Konva from 'konva';
import { playUI, updateTable } from '../components/UI/playUI';
import { $ } from '../utils/utils';
import levels from '../configs/levels';
import variables from '../global/variables';
import timer from '../components/timer';
import popup from '../components/popup';
import hint from '../components/hint';
import Won from '../assets/popup/won.gif';
import moves from '../components/moves';

const canvasOptions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default function Level({
  items, background, time, move,
}) {
  let levelItems = items;
  const stage = new Konva.Stage({
    container: 'root',
    width: canvasOptions.width,
    height: canvasOptions.height,
  });

  const bgLayer = new Konva.Layer();
  const itemsLayer = new Konva.Layer();

  stage.add(bgLayer);
  stage.add(itemsLayer);

  Konva.Image.fromURL(background, (bg) => {
    bg.setAttrs({
      x: 0,
      y: 0,
      width: canvasOptions.width,
    });
    bgLayer.add(bg);
    bgLayer.batchDraw();

    levelItems.forEach((img) => {
      Konva.Image.fromURL(img.image, (item) => {
        item.setAttrs({
          x: img.pos.x,
          y: img.pos.y,
          width: img.size.width,
          height: img.size.height,
          offset: {
            x: img.size.width / 2,
            y: img.size.height / 2,
          },
        });

        item.rotate(img.pos.r);

        item.on('click', () => {
          levelItems = levelItems.filter((el) => el.name !== img.name);

          item.destroy();

          itemsLayer.batchDraw();

          updateTable(levelItems);

          if (levelItems.length === 0 || (img.isKey === true && variables.childMode)) {
            popup({
              title: 'You won!',
              buttonText: 'Next level',
              image: Won,
              callback: () => {
                $('#root').innerHTML = '';
                variables.currentLevel += 1;
                Level(levels[variables.currentLevel]);
              },
            });

            clearInterval(variables.timerId);
          }

          hint(levelItems, itemsLayer);
        });

        itemsLayer.add(item);
        itemsLayer.batchDraw();

        img.imageItem = item;
      });
    });
  });

  playUI(levelItems);

  if (variables.childMode) {
    moves(move);
  } else {
    timer(time);
  }
  hint(items, itemsLayer);
}
