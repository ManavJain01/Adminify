// Importing Routes
const routes = require("./routes/route");
const UserRoutes = require("./routes/UserRoute");
const MessageRoutes = require("./routes/MessageRoutes");

// Importing env file
require("dotenv").config();

// Importing Node Modules
const path = require("path");

// Importing Multer
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const formattedTime = `${String(date.getHours()).padStart(2, "0")}-${String(
      date.getMinutes()
    ).padStart(2, "0")}-${String(date.getSeconds()).padStart(2, "0")}`;
    const timestamp = `${formattedDate}_${formattedTime}`;
    return cb(null, `${timestamp}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Accessing Express Packages
const express = require("express");
// const app = express();
const { app, server } = require("./socket/socket");

// middleware
const cookieParser = require("cookie-parser");

// Importing cors and using it.
const cors = require("cors");
app.use(
  cors({
    origin: [process.env.ClientLocation],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "views")));

// Importing Database
const mongoDB = require("./db/db");

// middleware or to set router
app.use("/", upload.single("logo"), routes);
app.use("/user", UserRoutes);
app.use("/messages", MessageRoutes);

// Connecting MongoDB Server
mongoDB();

// Starting the server
server.listen(5000, '0.0.0.0', () => {
  console.log("Server is running on port 5000.");
});
