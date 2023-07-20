// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const CompanyController = require('../controllers/company.controller');

// 2) Exporting Routes
module.exports = (app) => {
  app.post('/api/companies', CompanyController.createCompany);
}
