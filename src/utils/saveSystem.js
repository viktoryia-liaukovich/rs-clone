import variables from '../global/variables';

export function save(data = {}) {
  const savedGame = JSON.parse(localStorage.getItem('game save 1'));
  const newData = { ...savedGame, ...data };
  localStorage.setItem('game save 1', JSON.stringify(newData));
}

export function load() {
  return JSON.parse(localStorage.getItem('game save 1'));
}

export function setDefault() {
  save({
    music: '1',
    sounds: '1',
    childMode: false,
    lang: 'en',
    isDialogFinished: false,
    currentLevel: 0,
  });
}

export function parseSave() {
  const save = load();
  Object.keys(save).forEach((key) => {
    variables[key] = save[key];
  });
}
