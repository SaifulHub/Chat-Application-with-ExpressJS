const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorHanlder");

const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase connection successful"))
  .catch((err) => console.log(err));

// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup view Engine
app.set("view engine", "ejs");

// Set static Folder
app.use(express.static(path.join(__dirname, "public")));

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// setup Routes
app.use("/", loginRouter);
app.use("/user", userRouter);
app.use("inbox", inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// Error Handling
app.use(errorHandler);

// Listen Port
app.listen(process.env.PORT, () => {
  console.log(`App is listening to port ${process.env.PORT}`);
});
