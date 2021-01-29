import phrases from "../../configs/phrases";
import variables from "../../global/variables";
import { $ } from "../../utils/utils";
import dialog from "../dialog";

export default function dialogueUI(options) {
  let dialogEl = null;
  console.log(variables);
  const config = phrases[variables.currentLevel];

  dialogEl = $('#root').appendChild(dialog(config, options));
}