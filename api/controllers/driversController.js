'use strict';
var driversModel = require('../models/driversModel');
var driversJson = require('../../drivers.json');

function createDrivers(req, res,next) {
    req.body.content = driversJson;
    driversModel.createDrivers(driversJson).then( ()  => {
        res.status(200)
            .json({
                status: 'success',
                message: 'Successfully created drivers'
            })
        .catch(function (err) {
            return next(err);
        });
    });

};

function getDriver(req, res) {
    var id = parseInt(req.params.id);
    driversModel.getDriver(id).then((data) => {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Retrieved driver successfully'
            });
        })
        .catch(function (err) {
            return next(err);
        });
};


module.exports = {
    createDrivers: createDrivers,
    getDriver: getDriver
};