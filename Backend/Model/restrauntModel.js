var mongoose = require('mongoose');
const Schema = mongoose.Schema
# test jenkins
var Restraunt = new Schema({
    'Restaurant_ID': {
        type: String,
        required: true,
        unique: true
    },
    'Restaurant_Name': {
        type: String,
        required: true
    },
    'Cuisines': {
        type: String,
        required: true
    },
    'Average_Cost_for_two': {
        type: String,
        required: true
    },
    'Currency': {
        type: String,
        required: true
    },
    'Has_Table_booking': {
        type: String,
        required: true
    },
    'Has_Online_delivery': {
        type: String,
        required: true
    },
    'Aggregate_rating': {
        type: String,
        required: true
    },
    'Rating_color': {
        type: String,
        required: true
    },
    'Rating_text': {
        type: String,
        required: true
    },
    'Votes:': {
        type: String
    },
})
module.exports = mongoose.model("Restraunt", Restraunt);
