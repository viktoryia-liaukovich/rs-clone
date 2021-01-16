import levelOne from '../assets/backgrounds/menu.jpg';
import Hat from '../assets/items/hat.png';

export default {
    "1": {
        items: [
            {
                name: "Hat",
                image: Hat,
                size: {
                    width: 144,
                    height: 84,
                },
                pos: {
                    x: 100,
                    y: 200,
                    r: 45,
                }
            },
            {
                name: "Hat",
                image: Hat,
                size: {
                    width: 288,
                    height: 168,
                },
                pos: {
                    x: 700,
                    y: 400,
                    r: 0,
                }
            }
        ],
        background: levelOne,
    } 
}