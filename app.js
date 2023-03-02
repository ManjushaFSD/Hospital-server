const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const logger = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());

//Path to the directory/JSON file containing the data to be sent
const dataPath = path.join(__dirname, "data.json");

// Function to write data to the JSON file
function writeDataToFile(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data), "utf8");
}

// Function to read data from the JSON file
function readDataFromFile() {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
}

// Get all hospitals
app.get("/api/hospitals", (req, res) => {
  const data = readDataFromFile();
  res.send(data.hospitals);
});

// Get a single hospital
app.get("/api/hospitals/:id", (req, res) => {
  const data = readDataFromFile();
  const hospital = data.hospitals.find((h) => h.id === req.params.id);
  if (!hospital) {
    res.status(404).send("Hospital not found");
    return;
  }
  res.send(hospital);
});

// Create a new hospital
app.post("/api/hospitals", (req, res) => {
  const data = readDataFromFile();
  const newHospital = {
    id: Date.now().toString(),
    name: req.body.name,
    patientCount: req.body.patientCount,
    location: req.body.location,
  };
  data.hospitals.push(newHospital);
  writeDataToFile(data);
  res.status(201).send(newHospital);
});

// Update an existing hospital
app.put("/api/hospitals/:id", (req, res) => {
  const data = readDataFromFile();
  const hospital = data.hospitals.find((h) => h.id === req.params.id);
  if (!hospital) {
    res.status(404).send("Hospital not found");
    return;
  }
  hospital.name = req.body.name;
  hospital.patientCount = req.body.patientCount;
  hospital.location = req.body.location;
  writeDataToFile(data);
  res.send(hospital);
});

// Delete an existing hospital
app.delete("/api/hospitals/:id", (req, res) => {
  const data = readDataFromFile();
  const hospitalIndex = data.hospitals.findIndex((h) => h.id === req.params.id);
  if (hospitalIndex === -1) {
    res.status(404).send("Hospital not found");
    return;
  }
  data.hospitals.splice(hospitalIndex, 1);
  writeDataToFile(data);
  res.send(`Hospital with ID ${req.params.id} deleted`);
});


//Listening for changes at PORT ||3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
