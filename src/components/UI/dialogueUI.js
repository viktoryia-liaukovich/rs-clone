import phrases from '../../configs/phrases';
import variables from '../../global/variables';
import { $ } from '../../utils/utils';
import dialog from '../dialog';

export default function dialogueUI(options, item) {
  let dialogEl = null;

  const config = phrases[item || variables.currentLevel];

  dialogEl = $('#root').appendChild(dialog(config, options));
}
