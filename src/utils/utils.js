export const $ = (element) => document.querySelector(element);
export const create = (element) => document.createElement(element);
export const append = (elements, parent) => elements.forEach((element) => parent.appendChild(element));

export const fadeRoot = (callback, check = true) => {
  $('#root').classList.add('fade');

  if (callback) {
    const render = () => {
      $('#root').removeEventListener('transitionend', render);
      callback();
    }
    $('#root').addEventListener('transitionend', render);
  }

  check && setTimeout(() => $('#root').classList.remove('fade'), 500);
}