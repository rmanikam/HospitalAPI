const express = require("express");
const {
  registerDoctor,
  registerPatient,
  createReport,
  all_reports,
  AllReports,
  login,
} = require("../controllers/userController");
const passport = require("passport");

const router = express.Router();

// router.get("/", test);
router.post("/doctors/register", registerDoctor);

router.post(
  "/patients/register",
  passport.authenticate("jwt", { session: false }),
  registerPatient
);

router.post(
  "/patients/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  createReport
);

router.get("/patients/:id/all_reports", all_reports);

router.get("/reports/:status", AllReports);

router.post("/doctors/login", login);

module.exports = router;
