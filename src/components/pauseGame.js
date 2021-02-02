import { create } from '../utils/utils';
import popup from './popup';
import Pause from '../assets/popup/pause.gif';
import variables from '../global/variables';
import dictionary from '../configs/dictionary';
import button from './button';

export default function pauseGame() {
  const pause = button(dictionary.PAUSE, () => {
    popup({
      title: dictionary.PAUSE_MESSAGE,
      buttonText: dictionary.CONTINUE,
      image: Pause,
      callback: () => {
        variables.isGameInProgress = !variables.isGameInProgress;
      },
    });
    variables.isGameInProgress = !variables.isGameInProgress;
  }, 'pause');

  return pause;
}
