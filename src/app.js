const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("app:main");
const { initRoutes } = require("./routes/index");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
initRoutes(app);


// esto essssssssssssss
app.listen(process.env.PORT, () => {
  debug(`Server running on port ${process.env.PORT}`);
});
