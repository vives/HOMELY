const config = require("config");
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Item Model

const MakeAppoint = require("../../models/MakeAppoint");

// @route  GET api/makeAppoint/getAppointments
// @desc   Get all appointments
// @access Public
router.get("/getAppointments", auth, (req, res) => {
  MakeAppoint.find()
    .sort({ date: -1 })
    .then(makeAppoint => res.json(makeAppoint));
});

// @route  POST api/makeAppoint
// @desc   Make Appointment
// @access Public
router.post("/", (req, res) => {
  const {
    email,
    location,
    address,
    city,
    city_state,
    zip,
    dataAndTime_OP01,
    dataAndTime_OP02,
    dataAndTime_OP03,
    constraints,
    work
  } = req.body;

  //Simple Validation
  if (!req.body.address || !req.body.dataAndTime_OP01 || !req.body.work) {
    return res.status(400).json({ msg: "Please enter required values" });
  }
  const request = new MakeAppoint({
    email,
    location,
    address,
    city,
    city_state,
    zip,
    dataAndTime_OP01,
    dataAndTime_OP02,
    dataAndTime_OP03,
    constraints,
    work
  });
  request.save().then(makeAppoint =>
    res.json({
      Status: "Success",
      Info: {
        id: makeAppoint.id,
        email: makeAppoint.email,
        address: makeAppoint.address,
        data_and_time: makeAppoint.dataAndTime,
        constraints: makeAppoint.constraints,
        work: makeAppoint.work
      }
    })
  );
});

// @route  DELETE api/makeAppoint/:id
// @desc   Delete an appointment
// @access Private
router.delete("/:id", auth, (req, res) => {
  MakeAppoint.findById(req.params.id)
    .then(makeAppoint =>
      makeAppoint.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
