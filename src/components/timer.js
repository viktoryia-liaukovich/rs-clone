import { $, create } from '../utils/utils';
import popup from './popup';
import Lost from '../assets/popup/lost.gif';
import Pause from '../assets/popup/pause.gif';
import variables from '../global/variables';
<<<<<<< HEAD
import pauseGame from './pauseGame';
=======
import dictionary from '../configs/dictionary';
>>>>>>> beda08a... feat: add dictionary

let lastRemainTime = {};

function getRemainTime(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);

  return {
    total,
    minutes,
    seconds,
  };
}

export default function timer(sec) {
  let endTime = new Date(Date.parse(new Date()) + sec * 1000);

  const time = create('div');
  time.classList.add('timer');
  time.id = 'timer';

  const minSecDiv = create('div');
  minSecDiv.classList.add('timer-number');

  const minSec = create('span');
  minSec.classList.add('timer-time');
  minSec.innerHTML = '00:00';

  const pauseGame = create('button');
  pauseGame.id = 'pauseGame';
  pauseGame.classList.add('timer-button');
  pauseGame.innerText = dictionary.PAUSE;

  minSecDiv.appendChild(minSec);
  time.appendChild(minSecDiv);
  time.appendChild(pauseGame());

  let timerId;

  function updateTime() {
    if (variables.isGameInProgress) {
      const t = getRemainTime(endTime);
      lastRemainTime = t;

      if (t.total <= 0) {
        clearInterval(timerId);
        $('#root').removeChild(time);

        popup({
          title: 'Game away! Time is up!',
          buttonText: 'New Game',
          image: Lost,
        });
      }

      minSec.innerHTML = `${(`0${t.minutes}`).slice(-2)}:${(`0${t.seconds}`).slice(-2)}`;
    } else {
      endTime = new Date(Date.parse(new Date())
        + ((lastRemainTime.minutes * 60 === 0 ? 1 : lastRemainTime.minutes * 60)
        + lastRemainTime.seconds) * 1000);
    }
  }

  updateTime();

  timerId = setInterval(updateTime, 1000);
  variables.timerId = timerId;

  return time;
}
