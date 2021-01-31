import { create } from '../utils/utils';
import popup from './popup';
import Pause from '../assets/popup/pause.gif';
import variables from '../global/variables';
import dictionary from '../configs/dictionary';

export default function pauseGame() {
  const pause = create('button');
  pause.classList.add('pause__button');
  pause.innerText = dictionary.PAUSE;

  pause.addEventListener('click', () => {
    popup({
      title: dictionary.PAUSE_MESSAGE,
      buttonText: dictionary.CONTINUE,
      image: Pause,
      callback: () => {
        variables.isGameInProgress = !variables.isGameInProgress;
      },
    });
    variables.isGameInProgress = !variables.isGameInProgress;
  });
  return pause;
}
