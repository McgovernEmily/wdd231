import { getParkData, getAlerts  } from "./parkService.mjs";
import setHeaderFooter from "./setheaderfooter.mjs";
import { alertTemplate } from "./templates.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkstuff = await getParkData();
    const alerts = await getAlerts(parkstuff.parkCode);
    setHeaderFooter(parkstuff);
    setAlerts(alerts)
}

init();