# NodeBoilerPlate
### Installation
npm install <br/>
Open [http://localhost:4001](http://localhost:4001) to view it in the browser.
### Run
node index

### Description
Node js boiler plate with login and signup routes. Mongoose database is used for this boiler plate. <br/>

* Functions (Present in utils folder)
  - JWT Authentication
  - Send Email Function using nodemailer
  - Stripe Payment Method
 
 Few keys that needed to be updated. Create config.json and .env file and update things that are mentioned below

* Upadtes Required
  - Update JWT secret key in .env file for encryption and generation of token
  - Update mongoose private key in config.json file 
  - Update Stripe secret key  in .env file 
  - Update JWT secret key in .env file
  - Update email and password for sender email
