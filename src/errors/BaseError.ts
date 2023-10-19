/**
 * BaseError is the base class for all errors in the application.
 * name - the name of the error
 * statusCode - the http status code of the error
 * isOperational - if the error is operational
 * description - the description of the error
 */
export class BaseError extends Error {
  name: string
  statusCode: number
  isOperational: boolean
  description: string
  stack?: string | undefined

  constructor(name: string, statusCode: number, isOperational: boolean, description: string) {
    super(description)

    Object.setPrototypeOf(this, new.target.prototype)
    this.name = name
    this.statusCode = statusCode
    this.isOperational = isOperational
    this.description = description
    this.stack = new Error().stack
  }
}
