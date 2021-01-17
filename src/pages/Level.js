import Konva from "konva";
import { playUI, updateTable } from "../components/UI/playUI";

const canvasOptions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default function Level({ items, background }) {
  const stage = new Konva.Stage({
    container: "root",
    width: canvasOptions.width,
    height: canvasOptions.height,
  });
  bgLayer.add(bg); // добавляем на слой
  bgLayer.batchDraw(); // добавляем слой в очередь на отрисовку

  items.forEach((img) => {
    Konva.Image.fromURL(img.image, (item) => {
      // создаем картинку и по ее загрузке выполняем функцию
      item.setAttrs({
        // созданной картинке задаем свойства
        x: img.pos.x,
        y: img.pos.y,
        width: img.size.width,
        height: img.size.height,
        offset: {
          x: img.size.width / 2, // смещаем точку опоры картинки (точка, в которую
          y: img.size.height / 2, // отрисовывается картинка и вокруг которой вращается)
        },
      });

      item.rotate(img.pos.r); // вращаем картинку

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

        items.forEach((img) => {
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

            item.on("click", function () {
              items = items.filter((el) => el.name !== img.name);

              item.destroy();

              itemsLayer.batchDraw();
              updateTable(items);
            });

            itemsLayer.add(item);
            itemsLayer.batchDraw();
          });
        });
      });

      playUI(items);
    });
  });
}
