import { create, append } from '../utils/utils';
import musicIcon from '../assets/UI/music.png';
import soundsIcon from '../assets/UI/sounds.png';
import { changeMusicVolume, changeSoundsVolume } from '../utils/music';
import { load } from '../utils/saveSystem';
import mode from './mode';

function createSoundsOptions(name, icon, callback) {
  const soundsOptions = create('div');
  soundsOptions.classList.add('options--item');

  const sounds = new Image(32, 32);
  sounds.src = icon;

  const input = create('input');
  input.type = 'range';
  input.min = '0';
  input.max = '1';
  input.step = '0.1';
  input.defaultValue = load()[name];

  soundsOptions.appendChild(sounds);
  soundsOptions.appendChild(input);

  sounds.onclick = () => {
    soundsOptions.classList.toggle('disabled');

    if (soundsOptions.classList.contains('disabled')) {
      input.value = '0';
      callback('0');
    } else {
      input.value = '1';
      callback('1');
    }
  };

  input.onchange = (e) => {
    if (e.target.value === '0' && !soundsOptions.classList.contains('disabled')) {
      sounds.click();
    } else if (soundsOptions.classList.contains('disabled')) {
      soundsOptions.classList.toggle('disabled');
      callback(e.target.value);
    } else {
      callback(e.target.value);
    }
  };

  callback(input.defaultValue);
  if (input.defaultValue === '0') sounds.click();

  return soundsOptions;
}

export default function optionsPopup() {
  const options = create('div');
  options.classList.add('options', 'modal');

  const optionsContent = create('div');
  optionsContent.classList.add('options--content', 'modal--content');
  options.appendChild(optionsContent);

  const title = create('h2');
  title.innerText = 'OPTIONS';

  const cross = create('div');
  cross.classList.add('close-cross');


  const childModeOptions = create('div');
  childModeOptions.classList.add('options--item');

  const childModeText = create('p');
  childModeText.innerText = 'Child mode';

  append([childModeText, mode()], childModeOptions);


  optionsContent.appendChild(cross);
  optionsContent.appendChild(title);
  optionsContent.appendChild(createSoundsOptions('music', musicIcon, changeMusicVolume));
  optionsContent.appendChild(createSoundsOptions('sounds', soundsIcon, changeSoundsVolume));
  optionsContent.appendChild(childModeOptions);



  options.onclick = (e) => {
    if (e.target.classList.contains(options.className)) {
      options.remove();
    }
  };

  cross.onclick = () => {
    options.remove();
  };

  return options;
}
