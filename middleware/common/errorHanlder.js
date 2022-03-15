const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found."));
}

// Default error handler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
}

// exporting modules
module.exports = {
  notFoundHandler,
  errorHandler,
};
