// ---------------------------------------------------
// CONTROLLER SETUP - Company
// ---------------------------------------------------

// 1) Importing Model
const CompanyModel = require("../models/company.model");

// 2) Exporting Controller functions
module.exports = {
  createCompany: (req, res) => {
    let newCompany = new CompanyModel();
    res.json({ company: newCompany });
  },
}
