const router = require("express").Router();
const {
  getVolunteeringForVolunteerById,
  getVolunteeringForVolunteerByVolunteerId,
  addVolunteeringForVolunteer,
  getVolunteeringForVolunteer,
  updateVolunteeringForVolunteer,
  deleteVolunteeringForVolunteer,
} = require("../controllers/volunteeringForVolunteerController");

router.get(
  "/getVolunteeringForVolunteerById/:id",
  getVolunteeringForVolunteerById
);
router.get(
  "/getVolunteeringForVolunteerByIdVolunteer/:idVolunteer",
  getVolunteeringForVolunteerByVolunteerId
);
router.get("/getVolunteeringForVolunteer", getVolunteeringForVolunteer);
router.put(
  "/updateVolunteeringForVolunteer/:id",
  updateVolunteeringForVolunteer
);
router.delete(
  "/deleteVolunteeringForVolunteer/:id",
  deleteVolunteeringForVolunteer
);
router.post("/addVolunteeringForVolunteer", addVolunteeringForVolunteer);

module.exports = router;
