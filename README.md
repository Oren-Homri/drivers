# drivers
drivers code challenge

To run the app:

1.  Make sure you have postgres installed and running on port localhost:5432 (or change the connection string
    in driversModel.js)
2.  To create the database run the following in terminal: 
    psql -f drivers.sql
    
3. To Install packages run the following in Terminal:
   npm i

4. To run the service run the following in Terminal:
   npm start
   
5. The service has two APIs
    localhost:3000/import - will import drivers from an internal Json file
    localhost:3000/drivers/XXX - will return a driver's Json , where XXX is an ID of a driver
