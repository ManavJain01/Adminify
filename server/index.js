// Importing Routes
const routes = require("./routes/route");
const UserRoutes = require("./routes/UserRoute");
const MessageRoutes = require("./routes/MessageRoutes");

// Importing env file
require("dotenv").config();

// Accessing Express Packages
const express = require("express");
const app = express();

// middleware
const cookieParser = require("cookie-parser");

// Importing cors and using it.
const cors = require("cors");
app.use(
  cors({
    origin: [process.env.ClientLocation],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Importing Database
const mongoDB = require("./db/db");

// middleware or to set router
app.use("/", routes);
app.use("/user", UserRoutes);
app.use("/messages", MessageRoutes);

// Connecting MongoDB Server
mongoDB();

// Starting the server
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
