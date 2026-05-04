export class HttpError extends Error {
  constructor(message, statusCode, code=null) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}
