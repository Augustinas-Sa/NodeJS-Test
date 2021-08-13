// GET Models
// API
const MODELS_API = 'https://nodejs-exam-app.herokuapp.com/api/models';

// Variables
const modelsOutputElement = document.querySelector('#models-output');

// Functions
const getModels = async () => {
  try {
    let response = await fetch(MODELS_API);
    let models = await response.json();

    modelsOutputElement.innerHTML = models
      .slice(0, 10)
      .reduce((output, model) => {
        output += `
        <tr>
            <td>${model.name}</td>
            <td>${model.hour_price}€</td>
        </tr>
        `;

        return output;
      }, '');
  } catch (error) {
    res.json({ message: 'Please provide new model name and new hour/price' });
  }
};

// Events
document.addEventListener('DOMContentLoaded', getModels);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// POST Models
// API
// const MODELS_API = 'https://nodejs-exam-app.herokuapp.com/api/models';

// Variables
const postModelFormElement = document.querySelector('#post-model');

// Functions
const postModel = (e) => {
  e.preventDefault();

  let modelNewName = e.target.modelName.value;
  let modelNewHourPrice = e.target.modelHourPrice.value;

  if (!modelNewName || !modelNewHourPrice) {
    return alert('Please provide new model name and new model hour/price');
  }

  fetch(MODELS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: modelNewName, hour_price: modelNewHourPrice }),
  })
    .then((response) => response.json())
    .then((data) => alert(data.message));
};

// Events
postModelFormElement.addEventListener('submit', postModel);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Footer js
// Variables
const footer = document.querySelector('#date');

// Functions
const date = () => {
  footer.innerText += `${new Date().getFullYear()} © All rights reserved`;
};

// Events
document.addEventListener('DOMContentLoaded', date);
