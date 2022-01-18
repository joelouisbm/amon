const createError = require("http-errors");

module.exports.success = (res, statusCode, message, result) => {
  res.status(statusCode).json({
    info: {
      statusCode,
      message,
    },
    result,
  });
};

module.exports.error = (res, error = new createError.InternalServerError()) => {
  const { statusCode, message } = error;
  res.status(statusCode).send({
    info: {
      statusCode,
      message,
      error: error,
    },
  });
};
