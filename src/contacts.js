import { contactsData } from "./contactsData";
import { imageEl } from "./home";

function contactItemEl(obj) {
  const contact = document.createElement("div");
  const info = document.createElement("div");
  contact.classList.add("contact-item");
  info.classList.add("info");
  info.innerHTML = `<h2>${obj.name}</h2>
                    <p>${obj.position}</p>
                    <p>Tel.: ${obj.tel}</p>
                    <p>Email: ${obj.email}</p>`;

  contact.append(imageEl(obj.image), info);

  return contact;
}

export function contacts() {
  const contactsEl = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.innerText = "Contact us";

  contactsEl.append(h1);

  for (const item of contactsData) {
    contactsEl.append(contactItemEl(item));
  }

  return contactsEl;
}
