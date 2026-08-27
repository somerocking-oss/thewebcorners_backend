class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ApiError {
  constructor(message = "Bad request") {
    super(400, message);
  }
}

class UnauthorizedError extends ApiError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}

class NotFoundError extends ApiError {
  constructor(message = "Not found") {
    super(404, message);
  }
}

module.exports = { ApiError, BadRequestError, UnauthorizedError, NotFoundError };
