const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterCardSchema = new Schema({
    charId: String,
    name: String,
    comment: String,
});

module.exports = mongoose.model('CharacterCard', characterCardSchema);
