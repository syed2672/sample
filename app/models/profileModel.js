// Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Defines the Profile schema
var ProfileSchema = new Schema({
    userName: {type: String, required: true},
    userDescription: {type: String, required: true},
    userState: {type: String, required: true},
    userAge:{type: Number, required: true},
    userEthnicity:{type: String, required: true},
    userRace:{type: String, required: true},
    userSex:{type: String, required: true},
    userHeight:{type: Number, required: true},
    userWeight:{type: Number, required: true},
    picture: {type: Schema.Types.Mixed, required: true},
    createdAt: {type: Date, default: Date.now},    
});

// Sets the createdAt parameter equal to the current time
ProfileSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

// Exports the ProfileSchema for use elsewhere.
module.exports = mongoose.model('profile', ProfileSchema);
