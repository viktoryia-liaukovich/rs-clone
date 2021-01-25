import menuSound from "../assets/sounds/menu.mp3";

const soundbank = {
    menu: new Audio(menuSound),
};

const musicbank = {
    menu: new Audio(menuSound),
};

export function playMenuMusic() {
    musicbank.menu.play();
}

export function stopMenuMusic() {
    musicbank.menu.pause();
}

export function changeMusicVolume(value) {
    Object.values(musicbank).forEach((el) => {
        el.volume = value;
    })
}

export function changeSoundsVolume(value) {
    Object.values(soundbank).forEach((el) => {
        el.volume = value;
        playMenuMusic();
    })
}
