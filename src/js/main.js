import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setheaderfooter.mjs";
import setHeaderInfo from "./setheaderfooter.mjs";
import {mediaCardTemplate} from "./templates.mjs";

const parkData = getParkData();


function sectionIntro(data){
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `
  <h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}


function settingLinks(data){
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
sectionIntro(parkData);
settingLinks(parkInfoLinks);