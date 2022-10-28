import { imageEl } from "./home";
import { menuData } from "./menuData";

function introEl() {
  const introEl = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.innerText = menuData.intro.heading;
  introEl.appendChild(h1);
  for (const item of menuData.intro.text) {
    const p = document.createElement("p");
    p.innerText = item;
    introEl.appendChild(p);
  }

  return introEl;
}

function menuItemEl(obj) {
  const menuItem = document.createElement("div");
  const h2 = document.createElement("h2");
  menuItem.classList.add("menu-item");
  h2.innerText = obj.name;

  menuItem.append(h2, imageEl(obj.image));

  for (const item of obj.desc) {
    const p = document.createElement("p");
    p.innerText = item;
    menuItem.appendChild(p);
  }

  return menuItem;
}

export default function menu() {
  const menu = document.createElement("main");
  const btn = document.createElement("button");
  btn.classList.add("btn", "more");
  btn.innerText = "Show more";

  menu.appendChild(introEl());

  for (const item of menuData.menuItems) {
    menu.appendChild(menuItemEl(item));
  }

  menu.appendChild(btn);
  return menu;
}
