import { $, create } from '../utils/utils';

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

let isPlayGame = true;

export default function timer(sec) {
  let endTime = new Date(Date.parse(new Date()) + sec * 1000);

  const time = create('div');
  time.classList.add('timer');
  time.id = 'timerDown';

  const minSecDiv = create('div');
  minSecDiv.classList.add('timer-number');

  const minSec = create('span');
  minSec.classList.add('timer-time');
  minSec.innerHTML = '00:00';

  const pauseGame = create('button');
  pauseGame.id = 'pauseGame';
  pauseGame.classList.add('timer-button');
  pauseGame.innerText = 'Pause';

  minSecDiv.appendChild(minSec);
  time.appendChild(minSecDiv);
  time.appendChild(pauseGame);

  $('#root').appendChild(time);

  function updateTime() {
    if (isPlayGame) {
      const t = getRemainTime(endTime);
      lastRemainTime = t;

      if (t.total <= 0) {
        clearInterval(setInterval(updateTime, 1000));
        $('#root').removeChild(time);

        const pageLoss = create('div');
        pageLoss.id = 'timeUp';

        const timeUpText = create('div');
        timeUpText.id = 'timeUp-text';
        timeUpText.innerText = 'Game away! Time is up!';

        const newGame = create('button');
        newGame.classList.add('newGame');
        newGame.innerText = 'New Game';

        timeUpText.appendChild(newGame);
        pageLoss.appendChild(timeUpText);

        $('#root').appendChild(pageLoss);

        newGame.addEventListener('click', () => {
          $('#root').removeChild(pageLoss);
          timer(sec);
        });
      }

      minSec.innerHTML = `${(`0${t.minutes}`).slice(-2)}:${(`0${t.seconds}`).slice(-2)}`;
    } else {
      endTime = new Date(Date.parse(new Date())
      + ((lastRemainTime.minutes * 60 === 0 ? 1 : lastRemainTime.minutes * 60)
      + lastRemainTime.seconds) * 1000);
    }
  }

  setInterval(updateTime, 1000);

  pauseGame.addEventListener('click', () => {
    if (pauseGame.innerText === 'Pause') {
      pauseGame.innerText = 'Continue';
    } else {
      pauseGame.innerText = 'Pause';
    }
    isPlayGame = !isPlayGame;
  });

  return time;
}
