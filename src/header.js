export default function header() {
  const header = document.createElement("header");
  const logo = document.createElement("div");
  const nav = document.createElement("ul");

  logo.classList.add("logo");
  logo.innerHTML = `T<span>avern</span>I<span>n</span>T<span>he</span>S<span>tinks</span>`;

  nav.classList.add("nav");
  nav.innerHTML = `<li class="selected">Home</li><li>Menu</li><li>Contacts</li>`;

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}
