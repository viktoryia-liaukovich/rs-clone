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

export default function timer(endTime) {
  const time = create('div');
  time.classList.add('timer');
  time.id = 'timerDown';

  const minSec = create('span');

  const pageLost = create('div');
  pageLost.innerText = 'Game away! Time is up!';

  time.appendChild(minSec);
  
  $('#root').appendChild(time);
  
  function updateTime() {
    const t = getRemainTime(endTime);

    if (t.total <= 0) {
      clearInterval(setInterval(updateTime, 1000));
      $('#root').removeChild(time);
      $('#root').appendChild(pageLost);
    }
    
    minSec.innerHTML = `${(`0${t.minutes}`).slice(-2)}:${(`0${t.seconds}`).slice(-2)}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
  return time;
}
