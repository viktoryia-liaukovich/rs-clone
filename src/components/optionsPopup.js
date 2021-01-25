import { create } from "../utils/utils";
import musicIcon from '../assets/UI/music.png';
import soundsIcon from '../assets/UI/sounds.png';
import { changeMusicVolume, changeSoundsVolume } from '../utils/music';

export default function optionsPopup() {
  const options = create("div");
  options.classList.add("options");

  const optionsContent = create("div");
  optionsContent.classList.add("options--content");
  options.appendChild(optionsContent);

  const title = create('h2');
  title.innerText = 'OPTIONS';

  const cross = create('div');
  cross.classList.add('close-cross');

  optionsContent.appendChild(cross);
  optionsContent.appendChild(title);
  optionsContent.appendChild(createMusicOptions());
  optionsContent.appendChild(createSoundsOptions());

  options.onclick = (e) => {
    if (e.target.classList.contains('options')){
      options.remove();
    }
  }

  cross.onclick = () => {
    options.remove();
  }

  return options;
}


function createMusicOptions() {
  const musicOptions = create('div');
  musicOptions.classList.add('options--item');

  const music = new Image(32, 32);
  music.src = musicIcon;

  const input = create('input');
  input.type = 'range';
  input.min = '0';
  input.max = '1';
  input.step = '0.1';
  input.defaultValue = '1';

  musicOptions.appendChild(music);
  musicOptions.appendChild(input);

  music.onclick = () => {
    musicOptions.classList.toggle('disabled');

    if (musicOptions.classList.contains('disabled')) {
      input.value = '0';
      changeMusicVolume('0');
    } else {
      input.value = '1';
      changeMusicVolume('1');
    }
  }

  input.onchange = (e) => {
    if (e.target.value === '0' && !musicOptions.classList.contains('disabled')) {
      music.click();
    } else if (musicOptions.classList.contains('disabled')) {
      musicOptions.classList.toggle('disabled');
      changeMusicVolume(e.target.value);
    } else {
      changeMusicVolume(e.target.value);
    }
  }

  return musicOptions;
}

function createSoundsOptions() {
  const soundsOptions = create('div');
  soundsOptions.classList.add('options--item');

  const sounds = new Image(32, 32);
  sounds.src = soundsIcon;

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
      changeSoundsVolume('0');
    } else {
      input.value = '1';
      changeSoundsVolume('1');
    }
  }

  input.onchange = (e) => {
    if (e.target.value === '0' && !soundsOptions.classList.contains('disabled')) {
      sounds.click();
    } else if (soundsOptions.classList.contains('disabled')) {
      soundsOptions.classList.toggle('disabled');
      changeSoundsVolume(e.target.value);
    } else {
      changeSoundsVolume(e.target.value);
    }
  }

  return soundsOptions;
}