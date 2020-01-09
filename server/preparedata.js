'use strict';

const config = require('./server.config.json');
const mongoose = require('mongoose');
const tb = require('./models/tobuys');
const dbURI = config.dburl+'/'+config.dbname;

const data1 = [
  {
    what: 'H-Milch',
    where: 'Aldi',
    count: 1
  },
  {
    what: 'Rib-Eye Steak',
    where: 'Lidl',
    count: 1
  },
  {
    what: 'Joghurt fettarm',
    where: 'Lidl',
    count: 4
  },
  {
    what: 'Kartoffelsalat',
    where: 'Aldi'
  },
  {
    what: 'Pfeffer schwarz "Wagner"',
    where: 'Kaufland'
  },
  {
    what: 'Chips "Lays"',
    count: 2
  },
  {
    what: 'Kiste Tegernseer Bier',
    where: 'Orterer',
    count: 1
  }
];


const dbconn = mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
//mongoose.set('debug', true);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Mongoose connected to ${dbURI}`);
  var Tobuy = tb.model;
  Tobuy.deleteMany({}, function(err, doc) {
    if (err) {
      return console.error(err);
    } else {
      Tobuy.insertMany(data1, function(err, docs) {
        if (err) {
          return console.error(err);
        } else {
          //console.log('inserted', docs);
          db.close();
        }
      });
    }
  });
});
db.on('close', function(err, conn) {
  console.log('connection closed');
});

