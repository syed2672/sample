// Dependencies
var mongoose  = require('mongoose');
var Profile = require('../models/profileModel');
// App routes
module.exports = function() {
    return {
        /*
         * Get route to retrieve all the Profilees.
         */
        getAll : function(req, res){
            //Query the DB and if no errors, send all the Profilees
            var query = Profile.find({});
            query.exec(function(err, Profilees){
                if(err) res.send(err);
                //If no errors, send them back to the client
                res.json(Profilees);
            });
        },
        /*
         * Post route to save a new Profile into the DB.
         */
        post: function(req, res){
            //Creates a new Profile
            var newProfile = new Profile(req.body);
            //Save it into the DB.
            newProfile.save(function(err){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(req.body);
            });
        },
        /*
         * Get a single Profile based on id.
         */
        getOne: function(req, res){
            Profile.findById(req.params.id, function(err, Profile){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(Profile);
            });     
        }
    }
};
