class ApiErrorHandler extends Error {
    constructor(statusCode, message = "Something went wrong"){
        super(message)
        this.statusCode = statusCode;
    }
}

module.exports = ApiErrorHandler