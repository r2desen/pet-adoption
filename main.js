const template = document.querySelector("#pet-card-template");
const wrapper = document.creatDocumentFragment();

async function start() {
  const weatherPromisse = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );
  const weatherData = await weatherPromisse.json();
  const ourTemperature = weatherData.properties.periods[0].temperature;
  document.querySelector("#temperature-outpur").textContent = ourTemperature;
}

start();

async function petsArea() {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petsData = await petsPromise.json();
  petsData.forEach((pet) => {
    const clone = template.content.cloneNode(true);
    wrapper.appendChild(clone)
  });
}

petsArea();
