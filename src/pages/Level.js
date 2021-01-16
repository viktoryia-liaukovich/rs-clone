import Konva from 'konva';
import { playUI, updateTable} from '../components/UI/playUI'

const canvasOptions = {
    width: window.innerWidth,
    height: window.innerHeight,
}

export default function Level({items, background}) {
    const stage = new Konva.Stage({     // создаем "сцену" (stage), которая является холстом, по сути
        container: 'root',  // размещаем в элементе с id root
        width: canvasOptions.width,
        height: canvasOptions.height,
    });

    const bgLayer = new Konva.Layer();
    const itemsLayer = new Konva.Layer();
    
    stage.add(bgLayer);
    stage.add(itemsLayer);

    Konva.Image.fromURL(background, (bg) => {   // создаем картинку фона и по ее загрузке выполняем функцию
        bg.setAttrs({ // созданной картинке задаем свойства
            x: 0,
            y: 0,
            width: canvasOptions.width,
        });
        bgLayer.add(bg);    // добавляем на слой
        bgLayer.batchDraw();    // добавляем слой в очередь на отрисовку
        

        items.forEach(img => {
            Konva.Image.fromURL(img.image, (item) => {  // создаем картинку и по ее загрузке выполняем функцию
                item.setAttrs({ // созданной картинке задаем свойства
                    x: img.pos.x,
                    y: img.pos.y,
                    width: img.size.width,
                    height: img.size.height,
                    offset: {
                        x: img.size.width / 2,   // смещаем точку опоры картинки (точка, в которую 
                        y: img.size.height / 2    // отрисовывается картинка и вокруг которой вращается)
                    }
                });

                item.rotate(img.pos.r);     // вращаем картинку

                item.on('click', function () {
                    items = items.filter(el => el.name !== img.name);

                    item.destroy();
                    
                    itemsLayer.batchDraw();
                    updateTable(items);
                });

                itemsLayer.add(item);   // добавляем на слой
                itemsLayer.batchDraw(); // добавляем слой в очередь на отрисовку (draw отрисовывает как только так сразу,
            });                         // а batchDraw собирает пачку изменений и отрисовывает их вместе за раз)
        })
    })

    playUI(items);
}