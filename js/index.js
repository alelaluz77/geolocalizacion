import getGeolocation from "./dom/geolocalizacion.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  getGeolocation("geolocation");
});
