import { homeData } from "./homeData";

function welcomeEl() {
  const welcome = document.createElement("h1");
  welcome.innerHTML = `Welcome<br />to the<br />Tavern in the
                        <span class="stinks"> Stinks
                        <div>It's a location, not a verb</div></span>`;
  return welcome;
}

function imageEl(obj) {
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const imgSource = document.createElement("span");

  img.src = obj.src;
  img.alt = obj.alt;
  imgSource.innerHTML = obj.author;

  imgContainer.append(img, imgSource);

  return imgContainer;
}

function aboutEl() {
  const about = document.createElement("div");
  about.classList.add("about");
  for (let i = 0; i < homeData.about.length; i++) {
    const p = document.createElement("p");
    p.innerText = homeData.about[i];
    about.appendChild(p);
  }

  return about;
}

function workHoursEl() {
  const workHours = document.createElement("div");
  const heading = document.createElement("h3");
  const table = document.createElement("table");

  workHours.classList.add("work-hours");
  for (let i = 0; i < homeData.workHours.length; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${homeData.workHours[i].day}</td><td>${homeData.workHours[i].hours}</td>`;
    table.appendChild(tr);
  }

  heading.innerText = `Working hours:`;

  workHours.append(heading, table);

  return workHours;
}

function locationEl() {
  const location = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  location.classList.add("location");

  h3.innerText = `Location:`;
  p.innerText = homeData.address;

  location.append(h3, p);

  return location;
}

function home() {
  const main = document.createElement("main");
  main.append(
    welcomeEl(),
    imageEl(homeData.images.tavern),
    aboutEl(),
    workHoursEl(),
    locationEl()
  );

  return main;
}

export { imageEl, home };
