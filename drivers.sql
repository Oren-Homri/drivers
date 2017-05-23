DROP DATABASE DriversDB;
CREATE DATABASE DriversDB;

\c DriversDB;

DROP TABLE drivers;
CREATE TABLE drivers (
  id INTEGER PRIMARY KEY,
  name VARCHAR,
  license_number VARCHAR
);