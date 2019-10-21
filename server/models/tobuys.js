'use strict';

const mongoose = require('mongoose');
const tobuySchema = new mongoose.Schema({
  what: String,
  where: String,
  when: Date,
  done: Boolean
});
mongoose.model('Tobuy', tobuySchema);
