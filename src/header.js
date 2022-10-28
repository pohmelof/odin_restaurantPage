export default function header() {
  const header = document.createElement("header");
  const logo = document.createElement("div");
  const nav = document.createElement("ul");
  const navigation = ["Home", "Menu", "Contacts"];

  logo.classList.add("logo");
  logo.innerHTML = `T<span>avern</span>I<span>n</span>T<span>he</span>S<span>tinks</span>`;

  nav.classList.add("nav");
  for (let i = 0; i < navigation.length; i++) {
    const li = document.createElement("li");
    li.innerText = navigation[i];
    li.classList.add("link");
    if (i === 0) {
      li.classList.add("selected");
    }
    nav.appendChild(li);
  }

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}
