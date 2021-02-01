export const $ = (element) => document.querySelector(element);
export const create = (element) => document.createElement(element);
export const append = (elements, parent) => elements.forEach((element) => parent.appendChild(element));

export const fadeRoot = (callback) => {
  $('#root').classList.add('fade');
  setTimeout(() => $('#root').classList.remove('fade'), 500);

  if (callback) {
    const render = () => {
      callback();
      $('#root').removeEventListener('transitionend', render);
    }
    $('#root').addEventListener('transitionend', render);
  }

}