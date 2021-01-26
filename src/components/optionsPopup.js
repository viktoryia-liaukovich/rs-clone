import { create } from '../utils/utils';
import musicIcon from '../assets/UI/music.png';
import soundsIcon from '../assets/UI/sounds.png';
import { changeMusicVolume, changeSoundsVolume } from '../utils/music';

function createSoundsOptions(icon, callback) {
  const soundsOptions = create('div');
  soundsOptions.classList.add('options--item');

  const sounds = new Image(32, 32);
  sounds.src = icon;

  const input = create('input');
  input.type = 'range';
  input.min = '0';
  input.max = '1';
  input.step = '0.1';
  input.defaultValue = '1';

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

  return soundsOptions;
}

export default function optionsPopup() {
  const options = create('div');
  options.classList.add('options');

  const optionsContent = create('div');
  optionsContent.classList.add('options--content');
  options.appendChild(optionsContent);

  const title = create('h2');
  title.innerText = 'OPTIONS';

  const cross = create('div');
  cross.classList.add('close-cross');

  optionsContent.appendChild(cross);
  optionsContent.appendChild(title);
  optionsContent.appendChild(createSoundsOptions(musicIcon, changeMusicVolume));
  optionsContent.appendChild(createSoundsOptions(soundsIcon, changeSoundsVolume));

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
