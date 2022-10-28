import header from "./header";
import footer from "./footer";
import { home } from "./home.js";
import menu from "./menu";
import { contacts } from "./contacts";

const container = document.createElement("div");
container.classList.add("container");

document.getElementById("content").append(header(), container, footer());

const containerEl = document.querySelector(".container");

const btns = document.querySelectorAll(".link");

function renderMain(element) {
  containerEl.innerHTML = "";
  containerEl.appendChild(element);
}

btns.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) return;

    btns.forEach((item) => item.classList.remove("selected"));

    e.target.classList.add("selected");

    if (e.target.innerText === "Home") {
      renderMain(home());
    } else if (e.target.innerText === "Menu") {
      renderMain(menu());
    } else if (e.target.innerText === "Contacts") {
      renderMain(contacts());
    }

    console.log(e.target.innerText);
  })
);
containerEl.append(home());
