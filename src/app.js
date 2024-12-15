const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
app.use(morgan("dev"));
// app.use(morgan("combined")); // use for production

// Security app
app.use(helmet());

// Reduce the size transfered data
app.use(compression());

app.get("/", (req, res) => {
  const str = "Hello World";
  return res.status(200).json({
    message: "Hi chao cau",
    metadata: str.repeat(100000),
  });
});
module.exports = app;
