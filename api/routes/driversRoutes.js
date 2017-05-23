var driversController = require('../controllers/driversController');

module.exports = function(app) {

    app.route('/import').post(driversController.createDrivers);
    app.route('/drivers/:id').get(driversController.getDriver)

};