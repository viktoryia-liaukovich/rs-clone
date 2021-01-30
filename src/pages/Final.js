import { create } from '../utils/utils';

export default function Final() {
  const final = create('div');
  final.id = 'final';
  final.classList.add(`${final.id}`);

  const finalText = create('h1');
  finalText.classList.add(`${final.id}__text`);
  finalText.innerText = ' The game is over! Thanks for the help! Until next time!';

  const finalImage = create('div');
  finalImage.classList.add(`${final.id}__image`);

  final.appendChild(finalText);
  final.appendChild(finalImage);
  return final;
}
