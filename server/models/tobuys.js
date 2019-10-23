'use strict';

const mongoose = require('mongoose');
const tobuySchema = new mongoose.Schema({
  what: String,
  where: String,
  when: {type: Date, default: Date.now},
  count: Number,
  done: Date  // null, wenn noch nicht erledigt
});
mongoose.model('Tobuy', tobuySchema);
