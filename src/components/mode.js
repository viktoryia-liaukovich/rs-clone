import variables from '../global/variables';
import { $, create } from '../utils/utils';
import { load, save } from '../utils/saveSystem';

export default function mode() {
  const checkboxMode = create('div');
  checkboxMode.classList.add('checkboxMode');

  const checkbox = create('input');
  checkbox.id = 'checkbox';
  checkbox.classList.add(`${checkbox.id}`);
  checkbox.type = `${checkbox.id}`;

  if (load()['сhildMode'] === true) variables.childMode = true;

  checkbox.checked = variables.childMode;

  const checkboxLabel = create('label');
  checkboxLabel.htmlFor = `${checkbox.id}`;
  checkboxLabel.classList.add(`${checkbox.id}__label`);

  const checkboxLabelOn = create('span');
  checkboxLabelOn.classList.add('on');

  const checkboxLabelOff = create('span');
  checkboxLabelOff.classList.add('off');

  checkboxLabel.appendChild(checkboxLabelOn);
  checkboxLabel.appendChild(checkboxLabelOff);


  checkboxMode.appendChild(checkbox);
  checkboxMode.appendChild(checkboxLabel);


  checkbox.addEventListener('click', () => {
    variables.childMode = !variables.childMode;
    save ({
      сhildMode: variables.childMode,
    });
  });
  return checkboxMode;
}
