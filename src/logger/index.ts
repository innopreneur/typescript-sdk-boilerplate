import winston from 'winston'

// define the custom settings for each transport (file, console)
// you can also define other transports such as MongoDB, ElasticSearch, and more...
const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  },
  file: {
    level: 'info',
    filename: './logs/app.log',
    handleExceptions: true,
    json: true,
    colorize: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5
  }
}

export const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
})
