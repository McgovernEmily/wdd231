import { getParkData, getAlerts, getVisitorCenterData  } from "./parkService.mjs";
import setHeaderFooter from "./setheaderfooter.mjs";
import { alertTemplate, visitorcenterTemplate } from "./templates.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(centers) {
const visitorContainer = document.querySelector(".visitor > ul");
  const html = centers.map(visitorcenterTemplate);
  visitorContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkstuff = await getParkData();
    const alerts = await getAlerts(parkstuff.parkCode);
    const visitor = await getVisitorCenterData(parkstuff.code)
    setHeaderFooter(parkstuff);
    setAlerts(alerts);
    setVisitorCenters(visitor);
}

init();