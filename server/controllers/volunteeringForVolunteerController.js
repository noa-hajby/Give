const volunteeringForVolunteerModel = require("../models/VolunteeringForVolunteerModel");
//const { rawListeners } = require('../models/volunteeringForVolunteerModel');

const getVolunteeringForVolunteer = async (req, res) => {
  try {
    let volunteeringForVolunteer = await volunteeringForVolunteerModel.find();
    res.send(volunteeringForVolunteer);
  } catch (error) {
    res.json({ error: error });
  }
};

const getVolunteeringForVolunteerById = async (req, res) => {
  try {
    let id = req.params.id;
    let volunteeringForVolunteer = await volunteeringForVolunteerModel.findById(
      id
    );
    res.send(volunteeringForVolunteer);
  } catch (error) {
    res.json({ error: error });
  }
};

const getVolunteeringForVolunteerByVolunteerId = async (req, res) => {
  try {
    let idVolunteer = req.params.idVolunteer;
    let volunteeringForVolunteer = await volunteeringForVolunteerModel.find({
      idVolunteer,
    });
    res.json(volunteeringForVolunteer);
  } catch (error) {
    res.json({ error: error });
  }
};

const deleteVolunteeringForVolunteer = async (req, res) => {
  try {
    let id = req.params.id;
    let volunteeringForVolunteer =
      await volunteeringForVolunteerModel.findByIdAndDelete(id);
    res.send(volunteeringForVolunteer + "deleted succesfully!!");
  } catch (arror) {
    res.json({ error: error });
  }
};

const addVolunteeringForVolunteer = async (req, res) => {
  try {
    let newVolunteeringForVolunteer = new volunteeringForVolunteerModel(
      req.body
    );
    await newVolunteeringForVolunteer.save();
    res.json("the new volunteeringForVolunteer added successfully!!");
  } catch (error) {
    res.json({ error: error });
  }
};

const updateVolunteeringForVolunteer = async (req, res) => {
  try {
    let id = req.params.id;
    let newVolunteeringForVolunteer = req.body;
    await volunteeringForVolunteerModel.findByIdAndUpdate(
      id,
      newVolunteeringForVolunteer
    );
    rawListeners.send("the new volunteeringForVolunteer update successfully!!");
  } catch (error) {
    res.json({ error: error });
  }
};
module.exports = {
  getVolunteeringForVolunteer,
  getVolunteeringForVolunteerById,
  addVolunteeringForVolunteer,
  updateVolunteeringForVolunteer,
  deleteVolunteeringForVolunteer,
  getVolunteeringForVolunteerByVolunteerId,
};
