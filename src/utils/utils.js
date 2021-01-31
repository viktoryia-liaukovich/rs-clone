export const $ = (element) => document.querySelector(element);
export const create = (element) => document.createElement(element);
export const append = (elements, parent) => elements.forEach((element) => parent.appendChild(element));
