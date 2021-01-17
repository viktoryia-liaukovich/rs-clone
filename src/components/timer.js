import { $, create } from '../utils/utils';

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

export default function timer() {
  const endTime = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 60 * 1000);

  const time = create('div');
  time.classList.add('timer');
  time.id = 'timerDown';
  const minSecDiv = create('div');
  minSecDiv.classList.add('timer-number');
  const minSec = create('span');
  minSec.classList.add('timer-time');

  minSecDiv.appendChild(minSec);
  time.appendChild(minSecDiv);
  $('#root').appendChild(time);
  
  function updateTime() {
    const t = getRemainTime(endTime);

    if (t.total <= 0) {
      clearInterval(setInterval(updateTime, 1000));
      $('#root').removeChild(time);

      const pageLost = create('div');
      pageLost.id = 'timeUp';
      const timeUpText = create('div');
      timeUpText.id = 'timeUp-text';
      timeUpText.innerText = 'Game away! Time is up!';
      const newGame = create('button');
      newGame.classList.add('newGame');
      newGame.innerText = 'New Game';
      timeUpText.appendChild(newGame);
      pageLost.appendChild(timeUpText);

      $('#root').appendChild(pageLost);
      newGame.addEventListener('click', () => {
        $('#root').removeChild(pageLost);
        timer();
      });
    }
    
    minSec.innerHTML = `${(`0${t.minutes}`).slice(-2)}:${(`0${t.seconds}`).slice(-2)}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
  return time;
}
