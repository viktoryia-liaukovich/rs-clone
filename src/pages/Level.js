import Konva from 'konva';
import { playUI, updateTable } from '../components/UI/playUI';
import timer from '../components/timer';
import variables from '../global/variables';
import popup from '../components/popup';
import Won from '../assets/popup/won.gif';
import levels from '../configs/levels';
import { $ } from '../utils/utils';

const canvasOptions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default function Level({ items, background, time }) {
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
          if (levelItems.length === 0) {
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
        });

        itemsLayer.add(item);
        itemsLayer.batchDraw();
      });
    });
  });

  playUI(levelItems);

  timer(time);
}
