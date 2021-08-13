// GET Vehicles
// API
const VEHICLES_API = 'https://nodejs-exam-app.herokuapp.com/api/vehicles';

// Variables
const vehiclesOutputElement = document.querySelector('#vehicles-output');
const getAllBtnElement = document.querySelector('#getAll');

// Functions
// GET Vehicles --------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
const getVehicles = async () => {
  try {
    let response = await fetch(VEHICLES_API);
    let vehicles = await response.json();

    vehiclesOutputElement.innerHTML = vehicles
      .slice(0, 10)
      .reduce((output, vehicle) => {
        output += `
        <tr>
            <td>${vehicle._id}</td>
            <td>${vehicle.number_plate}</td>
            <td>${vehicle.country_location}</td>
        </tr>
        `;

        return output;
      }, '');
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    let response = await fetch(VEHICLES_API);
    let vehicles = await response.json();

    vehiclesOutputElement.innerHTML = vehicles
      .slice(0, 10)
      .reduce((output, vehicle) => {
        output += `
            <tr>
                <td>${vehicle._id}</td>
                <td>${vehicle.number_plate}</td>
                <td>${vehicle.country_location}</td>
            </tr>
            `;

        return output;
      }, '');
  } catch (error) {
    console.log(error);
  }
};

//Events
document.addEventListener('DOMContentLoaded', getVehicles);
getAllBtnElement.addEventListener('click', getAll, getVehicles());

// GET Vehicle in LT ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// API
const FINDLT_API = 'https://nodejs-exam-app.herokuapp.com/api/vehicles/lt';
// Variables
const findLTBtnElement = document.querySelector('#findLT');

// Functions
const findLt = async () => {
  try {
    let response = await fetch(FINDLT_API);
    let vehicles = await response.json();

    vehiclesOutputElement.innerHTML = vehicles
      .slice(0, 10)
      .reduce((output, vehicle) => {
        output += `
            <tr>
                <td>${vehicle._id}</td>
                <td>${vehicle.number_plate}</td>
                <td class="ltColors">${vehicle.country_location}</td>
            </tr>
            `;

        return output;
      }, '');
  } catch (error) {
    console.log(error);
  }
};

// Events
findLTBtnElement.addEventListener('click', findLt, getVehicles());

// GET Vehicle in LV ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// API
const FINDLV_API = 'https://nodejs-exam-app.herokuapp.com/api/vehicles/lv';
// Variables
const findLVBtnElement = document.querySelector('#findLV');

// Functions
const findLv = async () => {
  try {
    let response = await fetch(FINDLV_API);
    let vehicles = await response.json();

    vehiclesOutputElement.innerHTML = vehicles
      .slice(0, 10)
      .reduce((output, vehicle) => {
        output += `
            <tr>
                <td>${vehicle._id}</td>
                <td>${vehicle.number_plate}</td>
                <td class="lvColors">${vehicle.country_location}</td>
            </tr>
            `;

        return output;
      }, '');
  } catch (error) {
    console.log(error);
  }
};

// Events
findLVBtnElement.addEventListener('click', findLv, getVehicles());

// GET Vehicle in EST --------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// API
const FINDEST_API = 'https://nodejs-exam-app.herokuapp.com/api/vehicles/ee';
// Variables
const findESTBtnElement = document.querySelector('#findEST');

// Functions
const findEst = async () => {
  try {
    let response = await fetch(FINDEST_API);
    let vehicles = await response.json();

    vehiclesOutputElement.innerHTML = vehicles
      .slice(0, 10)
      .reduce((output, vehicle) => {
        output += `
            <tr>
                <td>${vehicle._id}</td>
                <td>${vehicle.number_plate}</td>
                <td class="estColors">${vehicle.country_location}</td>
            </tr>
            `;

        return output;
      }, '');
  } catch (error) {
    console.log(error);
  }
};

// Events
findESTBtnElement.addEventListener('click', findEst, getVehicles());
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// POST Vehicles
// API
const MODELS_API = 'https://nodejs-exam-app.herokuapp.com/api/models';

// Variables
const modelsSelectElement = document.querySelector('#selectModelName');
const postVehicleFormElement = document.querySelector('#post-vehicle-form');

// Functions
const getModelsSelectNames = async () => {
  try {
    let response = await fetch(MODELS_API);
    let models = await response.json();

    modelsSelectElement.innerHTML = models
      .slice(0, 10)
      .reduce((output, model) => {
        output += `
         <option value="${model._id}">${model.name}</option>
          `;

        return output;
      }, '');

    if (models.length > 0) {
      modelIdForPostMethod = models[0]._id;
    } else {
      modelIdForPostMethod = undefined;
    }
  } catch (error) {
    console.log(error);
  }
};

const changeGetModelId = (e) => {
  modelIdForPostMethod = e.target.value;
  console.log(modelIdForPostMethod);
};

const postVehicle = (e) => {
  e.preventDefault();

  let vehicleNewNumberPlate = e.target.vehicleNumberPlate.value;
  let vehicleNewCountryLocation = e.target.vehicleCountryLocation.value;

  if (!vehicleNewNumberPlate || !vehicleNewCountryLocation) {
    return alert(
      'Please provide new vehicle number plate and new vehicle country location'
    );
  }

  fetch(VEHICLES_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model_id: changeGetModelId(e),
      number_plate: vehicleNewNumberPlate,
      country_location: vehicleNewCountryLocation,
    }),
  })
    .then((response) => response.json())
    .then((data) => alert(data.message));
  console.log(changeGetModelId(e));
};

// Events
document.addEventListener('DOMContentLoaded', getModelsSelectNames);
postVehicleFormElement.addEventListener('submit', postVehicle);
modelsSelectElement.addEventListener('change', changeGetModelId);

// Footer js -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Variables
const footer = document.querySelector('#date');

// Functions
const date = () => {
  footer.innerText += `${new Date().getFullYear()} © All rights reserved`;
};

// Events
document.addEventListener('DOMContentLoaded', date);
