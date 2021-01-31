import { create } from '../utils/utils';
import popup from './popup';
import Pause from '../assets/popup/pause.gif';
import variables from '../global/variables';

export default function pauseGame() {
  const pause = create('button');
  pause.classList.add('pause__button');
  pause.innerText = 'Pause';

  pause.addEventListener('click', () => {
    pause.innerText = 'Continue';

    popup({
      title: 'Game is paused!',
      buttonText: 'Continue',
      image: Pause,
      callback: () => {
        pause.innerText = 'Pause';
        variables.isGameInProgress = !variables.isGameInProgress;
      },
    });
    variables.isGameInProgress = !variables.isGameInProgress;
  });
  return pause;
}
