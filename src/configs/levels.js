import levelOne from '../assets/backgrounds/11.jpg';
import levelTwo from '../assets/backgrounds/10.jpg';
import Hat from '../assets/items/hat.png';
import Wreath from '../assets/items/wreath.png';
import Candle from '../assets/items/candle.png';
import Snowflake from '../assets/items/snowflake.png';

export default {
  0: {
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
        isKey: false,
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
          y: 300,
          r: 0,
        },
        isKey: true,
      },

    ],
    background: levelOne,
    point: {
      x: 100,
      y: 100,
    },
    time: 30,
    move: 10,
  },
  1: {
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
    background: levelTwo,
    point: {
      x: 300,
      y: 100,
    },
    time: 30,
    move: 5,

  },
};
