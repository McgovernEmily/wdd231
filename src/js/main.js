import { getParkData, getInfoLinks} from "./parkService.mjs";
import setHeaderFooter from "./setheaderfooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

import "../css/home.css";
import "../css/style.css";

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
  enableNavigation();
}

function enableNavigation() {
  const menubutton = document.querySelector("#global-nav-toggle");

  menubutton.addEventListener("click", (ev) => {
    let target = ev.target;

    document.querySelector(".global-nav").classList.toggle("show");

    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }

    if (document.querySelector(".global-nav").classList.contains("show")){
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }

    console.log("toggle");
  });
}

init();