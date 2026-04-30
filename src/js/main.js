import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];

function setHeaderInfo(data) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
  document.querySelector("head > title").textContent = data.fullName;
  // set the banner image
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  // use the template function above to set the rest of the park specific info in the header
  document.querySelector(".hero-banner_content").innerHTML =
    parkInfoTemplate(data);
}

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner_title">${info.name}</a>
  <p class="hero-banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

function sectionIntro(data){
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

function mediaCardTemplate(info){
  return `<div class="media-card">
  <a href="${info.link}"
  <img src="${info.image}" alt = "${info.name}" class = "media-card_img>
  <h3 class = "media-card_title>${info.name}</h3>
  </a>
  <p>${info.description}</p>
  </div>
  `;
}

function settingLinks(data){
  const info = document.querySelector(".info");
  const html = data.map(parkInfoLinks);
  info.innerHTML = html.join("");
}

function footer()
setHeaderInfo(parkData);