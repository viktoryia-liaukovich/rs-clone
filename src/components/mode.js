import variables from '../global/variables';
import { $, create } from '../utils/utils';

export default function mode() {
  const checkboxMode = create('div');
  checkboxMode.classList.add('checkboxMode');

  const checkbox = create('input');
  checkbox.id = 'checkbox';
  checkbox.classList.add(`${checkbox.id}`);
  checkbox.type = `${checkbox.id}`;
  checkbox.checked = variables.childMode;

  const checkboxLabel = create('label');
  checkboxLabel.htmlFor = `${checkbox.id}`;
  checkboxLabel.classList.add(`${checkbox.id}__label`);

  const checkboxLabelOn = create('span');
  checkboxLabelOn.classList.add('on');
  checkboxLabelOn.innerText = 'Child';

  const checkboxLabelOff = create('span');
  checkboxLabelOff.classList.add('off');
  checkboxLabelOff.innerText = 'Adult';

  checkboxLabel.appendChild(checkboxLabelOn);
  checkboxLabel.appendChild(checkboxLabelOff);

  checkboxMode.appendChild(checkbox);
  checkboxMode.appendChild(checkboxLabel);

  checkbox.addEventListener('click', () => {
    variables.childMode = !variables.childMode;
  });
  return checkboxMode;
}
