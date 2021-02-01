import levelOne from '../assets/backgrounds/1.png';
import Basket from '../assets/items/basket.png';
import Brush from '../assets/items/brush.png';
import Egg from '../assets/items/egg.png';
import Palette from '../assets/items/palette.png';

import levelTwo from '../assets/backgrounds/2.jpg';
import Bucket from '../assets/items/bucket.png';
import Unicorn from '../assets/items/unicorn.png';
import Plane from '../assets/items/plane.png';
import Shovel from '../assets/items/shovel.png';
import Candle from '../assets/items/candle.png';

import levelThree from '../assets/backgrounds/3.jpg';
import Box from '../assets/items/box.png';
import Fairy from '../assets/items/fairy.png';
import Rainbow from '../assets/items/rainbow.png';
import Tooth from '../assets/items/tooth.png';
import Toothbrush from '../assets/items/toothbrush.png';
import Coin from '../assets/items/coin.png';

import levelFour from '../assets/backgrounds/28.jpg';
import levelFive from '../assets/backgrounds/19.jpg';
import levelSix from '../assets/backgrounds/10.jpg';
import Hat from '../assets/items/hat.png';
import Wreath from '../assets/items/wreath.png';

import Snowflake from '../assets/items/snowflake.png';

export default {
  0: {
    items: [
      {
        name: 'Brush',
        image: Brush,
        size: {
          width: 40,
          height: 40,
        },
        pos: {
          x: 325,
          y: 210,
          r: 45,
        },
        isKey: true,
      },
      {
        name: 'Basket',
        image: Basket,
        size: {
          width: 40,
          height: 32,
        },
        pos: {
          x: 1110,
          y: 810,
          r: 0,
        },

      },
      {
        name: 'Egg',
        image: Egg,
        size: {
          width: 117,
          height: 200,
        },
        pos: {
          x: 525,
          y: 430,
          r: -15,
        },

      },
      {
        name: 'Palette',
        image: Palette,
        size: {
          width: 58,
          height: 52,
        },
        pos: {
          x: 1500,
          y: 450,
          r: -50,
        },

      },

    ],
    background: levelOne,
    point: {
      x: 300,
      y: 200,
    },
    time: 30,
    move: 10,
  },
  1: {
    items: [
      {
        name: 'Bucket',
        image: Bucket,
        size: {
          width: 70,
          height: 100,
        },
        pos: {
          x: 225,
          y: 910,
          r: 45,
        },

      },
      {
        name: 'Unicorn',
        image: Unicorn,
        size: {
          width: 50,
          height: 40,
        },
        pos: {
          x: 880,
          y: 580,
          r: 0,
        },
        isKey: true,
      },
      {
        name: 'Plane',
        image: Plane,
        size: {
          width: 50,
          height: 30,
        },
        pos: {
          x: 1555,
          y: 230,
          r: -15,
        },

      },
      {
        name: 'Shovel',
        image: Shovel,
        size: {
          width: 18,
          height: 62,
        },
        pos: {
          x: 570,
          y: 400,
          r: 0,
        },

      },
      {
        name: 'Candle',
        image: Candle,
        size: {
          width: 22,
          height: 60,
        },
        pos: {
          x: 1850,
          y: 310,
          r: 0,
        },
        isKey: true,
      },

    ],
    background: levelTwo,
    point: {
      x: 540,
      y: 300,
    },
    time: 30,
    move: 5,

  },
  2: {
    items: [
      {
        name: 'Coin',
        image: Coin,
        size: {
          width: 36,
          height: 21,
        },
        pos: {
          x: 255,
          y: 610,
          r: 45,
        },
        isKey: false,
      },
      {
        name: 'Box',
        image: Box,
        size: {
          width: 15,
          height: 50,
        },
        pos: {
          x: 855,
          y: 310,
          r: 0,
        },
        isKey: false,
      },
      {
        name: 'Fairy',
        image: Fairy,
        size: {
          width: 60,
          height: 80,
        },
        pos: {
          x: 1080,
          y: 810,
          r: 0,
        },
        isKey: true,
      },

      {
        name: 'Rainbow',
        image: Rainbow,
        size: {
          width: 68,
          height: 62,
        },
        pos: {
          x: 1200,
          y: 700,
          r: 45,
        },
        isKey: false,
      },
      {
        name: 'Tooth',
        image: Tooth,
        size: {
          width: 18,
          height: 32,
        },
        pos: {
          x: 1350,
          y: 900,
          r: 0,
        },
        isKey: false,
      },
      {
        name: 'Toothbrush',
        image: Toothbrush,
        size: {
          width: 32,
          height: 68,
        },
        pos: {
          x: 536,
          y: 250,
          r: -45,
        },
        isKey: false,
      },

    ],
    background: levelThree,
    point: {
      x: 800,
      y: 435,
    },
    time: 30,
    move: 5,

  },
  3: {
    items: [
      {
        name: 'Hat',
        image: Hat,
        size: {
          width: 36,
          height: 21,
        },
        pos: {
          x: 925,
          y: 510,
          r: 45,
        },
        isKey: false,
      },
      {
        name: 'Candle',
        image: Candle,
        size: {
          width: 22,
          height: 60,
        },
        pos: {
          x: 1080,
          y: 110,
          r: 0,
        },
        isKey: true,
      },
      {
        name: 'Wreath',
        image: Wreath,
        size: {
          width: 50,
          height: 30,
        },
        pos: {
          x: 525,
          y: 430,
          r: -15,
        },
        isKey: false,
      },
      {
        name: 'Snowflake',
        image: Snowflake,
        size: {
          width: 68,
          height: 62,
        },
        pos: {
          x: 970,
          y: 500,
          r: 0,
        },
        isKey: false,
      },

    ],
    background: levelFour,
    point: {
      x: 1000,
      y: 555,
    },
    time: 30,
    move: 5,

  },
  4: {
    items: [
      {
        name: 'Hat',
        image: Hat,
        size: {
          width: 36,
          height: 21,
        },
        pos: {
          x: 925,
          y: 510,
          r: 45,
        },
        isKey: false,
      },
      {
        name: 'Candle',
        image: Candle,
        size: {
          width: 22,
          height: 60,
        },
        pos: {
          x: 1080,
          y: 110,
          r: 0,
        },
        isKey: true,
      },
      {
        name: 'Wreath',
        image: Wreath,
        size: {
          width: 50,
          height: 30,
        },
        pos: {
          x: 525,
          y: 430,
          r: -15,
        },
        isKey: false,
      },
      {
        name: 'Snowflake',
        image: Snowflake,
        size: {
          width: 68,
          height: 62,
        },
        pos: {
          x: 970,
          y: 500,
          r: 0,
        },
        isKey: false,
      },

    ],
    background: levelFive,
    point: {
      x: 1200,
      y: 650,
    },
    time: 30,
    move: 5,

  },
  5: {
    items: [
      {
        name: 'Hat',
        image: Hat,
        size: {
          width: 36,
          height: 21,
        },
        pos: {
          x: 925,
          y: 510,
          r: 45,
        },
        isKey: false,
      },
      {
        name: 'Candle',
        image: Candle,
        size: {
          width: 22,
          height: 60,
        },
        pos: {
          x: 1080,
          y: 110,
          r: 0,
        },
        isKey: true,
      },
      {
        name: 'Wreath',
        image: Wreath,
        size: {
          width: 50,
          height: 30,
        },
        pos: {
          x: 525,
          y: 430,
          r: -15,
        },
        isKey: false,
      },
      {
        name: 'Snowflake',
        image: Snowflake,
        size: {
          width: 68,
          height: 62,
        },
        pos: {
          x: 970,
          y: 500,
          r: 0,
        },
        isKey: false,
      },

    ],
    background: levelSix,
    point: {
      x: 1425,
      y: 595,
    },
    time: 30,
    move: 5,

  },
};
