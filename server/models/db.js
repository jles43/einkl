// db model

const mongoose = require('mongoose');
const readline = require('readline');

const dbURI = 'mongodb://localhost:9802/einkl-db';

const connectHandler = function() {
  console.log(`Mongoose connected to ${dbURI}`);
};

const connectErrorHandler = function(err) {
  console.log('Mongoose connection error:', err);
};

const disconnectHandler = function() {
  console.log('Mongoose disconnected');
};

const gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(
    function() {
      console.log(`Mongoose disconnected through ${msg}`);
      callback();
    }
  );
};

if (process.platform === 'win32') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', function() {
    process.emit('SIGINT');
  });
}

process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', () => {process.kill(process.pid, 'SIGUSR2')});
});

process.on('SIGINT', function() {
  gracefulShutdown('app termination', () => {process.exit(0)});
});

process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', () => {process.exit(0)});
});

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', connectHandler);
mongoose.connection.on('error', connectErrorHandler);
mongoose.connection.on('disconnected', disconnectHandler);

require('./tobuys');

module.exports = {
};
