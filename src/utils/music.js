import menuSound from "../assets/sounds/menu.mp3";

const soundbank = {
    menu: new Audio(menuSound),
};

export function playMenuMusic() {
    soundbank.menu.play();
}

export function stopMenuMusic() {
    soundbank.menu.stop();
}
