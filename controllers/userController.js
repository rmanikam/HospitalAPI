const Doctor = require("../models/doctor");

const Patient = require("../models/Patient");

const jwt = require("jsonwebtoken");
// module.exports.test = (req, res, next) => {
//   res.send("<h1>Hello Node! </h1>");
// };
module.exports.registerDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(200).json({
      success: true,
      message: "Doctor Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports.registerPatient = async (req, res, next) => {
  try {
    req.body.doctor = "66b9ce8ad05d015b9d579473";

    const patient = await Patient.create(req.body);

    res.status(200).json({
      success: true,
      message: "Patient Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports.createReport = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);

    req.body.date = Date.now();

    patient.reports.push(req.body);

    patient.save();

    res.status(200).json({
      success: true,
      message: "Patient Report Created Successfully",
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.all_reports = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.status(200).json({
      success: true,
      reports: patient.reports,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.AllReports = async (req, res, next) => {
  try {
    const patient = await Patient.find({
      reports: { $elemMatch: { status: req.params.status } },
    });
    res.status(200).json({
      success: true,
      data: patient,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const user = await Doctor.find(req.body);
    if (user) {
      const token = jwt.sign(user.id, "secret");

      res.status(200).json({
        success: true,
        token,
      });
    } else {
      res.status(404).send("name or password is invalid");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
