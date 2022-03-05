const express = require("express");
const router = express.Router();
const Vaccine = require("../../models/vaccine_appointments.model");
router.get("/test", (req, res) => res.send("vaccine route testing!"));
router.get("/", (req, res) => {
  Vaccine.find()
    .then((vaccines) => res.json(vaccines))
    .catch((err) => res.status(404).json({ novaccinesfound: "" }));
});

router.get("/:id", (req, res) => {
  Vaccine.findById(req.params.id)
    .then((vaccine) => res.json(vaccine))
    .catch((err) => res.status(404).json({ novaccinefound: "" }));
});

router.post("/", (req, res) => {
  Vaccine.create(req.body)
    .then((vaccine) => res.json({ msg: "" }))
    .catch((err) => res.status(400).json({ error: "" }));
});

router.put("/:id", (req, res) => {
  Vaccine.findByIdAndUpdate(req.params.id, req.body)
    .then((vaccine) => res.json({ msg: "" }))
    .catch((err) => res.status(400).json({ error: "" }));
});

router.delete("/:id", (req, res) => {
  Vaccine.findByIdAndRemove(req.params.id, req.body)
    .then((vaccine) => res.json({ mgs: "" }))
    .catch((err) => res.status(404).json({ error: "" }));
});

module.exports = router;
