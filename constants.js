// * 200 OK: The request was successful, and the server returned the requested resource.
// * 201 Created: The request was successful, and a new resource was created as a result.
// * 400 Bad Request: The server could not understand the request due to invalid syntax or malformed request.
// * 401 Unauthorized: Unauthorized access
// * 404 Not Found: The requested resource could not be found on the server.

exports.constants = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
