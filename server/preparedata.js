'use strict';

const db = require('./models/db');

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

const clear_data = function() {
};

const save_data = function(dataitem) {
  console.log('save_data(', dataitem, ')');
  var doc = new db.Tobuy(dataitem);
  doc.save();
};

const populate_database = function(data) {
  var i;
  clear_data();
  for (i=0; i<data.length; i++) {
    save_data(data[i]);
  }
};

populate_database(data1);
