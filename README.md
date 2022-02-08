# E-code

A Full Stack Application based on the Idea of a Simple Learning App...
The App is Build over the Technologies, MYSQL, NodeJS and ReactJS

## Setup

### Backend

In the Backend we have used MYSQL for database and NodeJS with expressJS as the backend Framework.

#### MYSQL

1) The `database` folder has all the SQL scripts including the Tables and Stored Procedures. Run all the SQL scripts and execute them in your localhost and the Schema, Tabels (each table with its name is mentioned as `learndev_school_{tablename}`) and the Stored Procedure its named as following `learningdev_school_routine`.
  This will get the database setup for you.

#### NodeJS (Server)

Just a Simple `npm install` would get you setup with node js, but Connecting to the database will require you to make a `.env` file with the following variables placed init
    
    user = `your localhost username (usally is root)`
    host = localhost
    password = `your localhost password`
    database = learningdev_school
    
  And your Server is setup and Good to go ... `npm start` on the terminal and your server will be Live
  
  ### ReactJS (Client)
  
  Just a Simple `npm install` will do the trick for the Client-side
  
  On the Terminal `npm start` to get the client side up and Running.
    
  
