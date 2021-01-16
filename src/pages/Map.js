import config from "../configs/levels";

export default function Map() {
  const mapWrapper = create("div");
  mapWrapper.classList.add("map");

  Object.values(config).forEach((el) => {
    const marker = create("span");

    marker.classList.add("marker");
    marker.style.top = el.point.y;
    marker.style.left = el.point.x;

    mapWrapper.appendChild(marker);
  });

  nav.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case menuConfig.NEW_GAME: {
        $("#root").innerHTML = "";
        $("#root").appendChild(Level(config[1]));
        break;
      }
    }
  });

  menuWrapper.appendChild(nav);

  return menuWrapper;
}
