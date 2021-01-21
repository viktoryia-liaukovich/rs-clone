import levelOne from '../assets/backgrounds/11.jpg';
import Hat from '../assets/items/hat.png';
import Wreath from '../assets/items/wreath.png';
import Candle from '../assets/items/candle.png';
import Snowflake from '../assets/items/snowflake.png';

export default {
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
          y: 700,
          r: 0,
        },
      },
      /* {
        name: 'Har',
        image: Hat,
        size: {
          width: 288,
          height: 168,
        },
        pos: {
          x: 700,
          y: 400,
          r: 0,
        },
      },
      {
        name: 'HarASSDADAS',
        image: Hat,
        size: {
          width: 288,
          height: 168,
        },
        pos: {
          x: 700,
          y: 400,
          r: 0,
        },
      },
      {
        name: 'Haradasddfbghhkfs',
        image: Hat,
        size: {
          width: 288,
          height: 168,
        },
        pos: {
          x: 700,
          y: 400,
          r: 0,
        },
      }, */
    ],
    background: levelOne,
    point: {
      x: 100,
      y: 100,
    },
    time: 80,
  },
};
