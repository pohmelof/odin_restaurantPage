export default function footer() {
  const footer = document.createElement("footer");
  const div = document.createElement("div");

  div.innerHTML = `All rights preserved, packed and hidden, 2022 &copy;`;
  footer.appendChild(div);

  return footer;
}
