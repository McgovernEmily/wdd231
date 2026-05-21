import { getParkData, getAlerts, getVisitorCenterData  } from "./parkService.mjs";
import setHeaderFooter from "./setheaderfooter.mjs";
import { alertTemplate, visitorcenterTemplate, activityTemplate } from "./templates.mjs";

import "../css/conditions.css";
import "../css/style.css";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(centers) {
  const visitorContainer = document.querySelector(".visitor ul");
  const html = centers.map(visitorcenterTemplate);
  visitorContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");
  const html = activityTemplate(activities);
  activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

async function init() {
    const parkstuff = await getParkData();
    const alerts = await getAlerts(parkstuff.parkCode);
    const visitor = await getVisitorCenterData(parkstuff.parkCode)
    setHeaderFooter(parkstuff);
    setAlerts(alerts);
    setVisitorCenters(visitor);
    setActivities(parkstuff.activities)
}

init();