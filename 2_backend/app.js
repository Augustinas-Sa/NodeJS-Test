const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const Model = require('./models/modelModel.js');
const Vehicle = require('./models/vehicleModel.js');

// Middlewares
app.use(cors());
app.use(express.json());

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('MongoDB connected...');

    // Starting server
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));

// Routes
// GET       /api/models                 (paduos visus modelius - auto kaina be PVM);
app.get('/api/models', async (req, res) => {
  const models = await Model.find({});

  res.json(models);
});

// POST      /api/models                 (leis įrašyti naują modelį/markę: name: BMW X1, hour_price: 5.55, name: BMW X3, hour_price: 4.33);
app.post('/api/models', (req, res) => {
  const model = new Model(req.body);

  model
    .save()
    .then((response) => res.json({ response, message: 'Model saved...' }))
    .catch((err) => console.log(err));
});

// POST      /api/vehicles               (įrašyti naują automobilį: number_plate: JSF999, country_location: LT);
app.post('/api/vehicles', (req, res) => {
  const vehicle = new Vehicle(req.body);

  vehicle
    .save()
    .then((response) => res.json({ response, message: 'Vehicle saved...' }))
    .catch((err) => console.log(err));
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
/*
GET       /api/models                 (paduos visus modelius - auto kaina be PVM);
GET       /api/modelscount            (grąžins visus modelius ir kiek automobilių turi šie modeliai);
GET       /api/vehicles               (paduos visus automobilius, kur model_id taps model name ir hour_price [su join padaryti]). Čia, automobilių kaina grąžinama su PVM;
GET       /api/vehicles/lt            (paduos visus automobilius, kurie yra Lietuvoje; identiškas duomenų formatas kaip /vehicles);
GET       /api/vehicles/lv            (paduos visus automobilius, kurie yra Latvijoje; identiškas duomenų formatas kaip /vehicles);
GET       /api/vehicles/ee            (paduos visus automobilius, kurie yra Estijoje; identiškas duomenų formatas kaip /vehicles);

POST      /api/models                 (leis įrašyti naują modelį/markę: name: BMW X1, hour_price: 5.55, name: BMW X3, hour_price: 4.33);
POST      /api/vehicles               (įrašyti naują automobilį: number_plate: JSF999, country_location: LT);
*/

/*
/api/models
{
    id: 1
    name: BMW X3
    hour_price: 5.55
},
{
    id: 2
    name: BMW X1
    hour_price: 4.33
}
*/

/*
/api/vehicles
{
    model_id: 1
    number_plate: JSF999
    country_location: LT
},
{
    model_id: 2
    number_plate: JSF998
    country_location: LV
},
{
    model_id: 3
    number_plate: AB1234
    country_location: LV
},
*/
