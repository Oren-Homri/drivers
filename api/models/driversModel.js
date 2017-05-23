var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/DriversDB';
var db = pgp(connectionString);

function createDrivers(drivers) {

    let insertStatement = '';
    req.body.content.forEach( (item) => {
        insertStatement +=  `insert into drivers (id,name,license_number) values(${item.id}, '${item.name}', '${item.license_number}'); `;
    });

    return db.none(insertStatement);
}

function getDriver(id) {
    return db.one('select * from drivers where id = $1', id);
}


module.exports = {
    getDriver: getDriver,
    createDrivers: createDrivers,
};


