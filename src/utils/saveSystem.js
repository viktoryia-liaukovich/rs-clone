export function save(data = {}) {
  const savedGame = JSON.parse(localStorage.getItem('game save 1'));
  const newData = { ...savedGame, ...data };
  localStorage.setItem('game save 1', JSON.stringify(newData));
}

export function load() {
  return JSON.parse(localStorage.getItem('game save 1'));
}
