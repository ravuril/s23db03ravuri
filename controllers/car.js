var Car = require('../models/car');
// var express = require('express');
// var router = express.Router();
// List of all Costumes
exports.car_list = function(req, res) {
res.send('NOT IMPLEMENTED: Car list');
};
// for a specific Car.
exports.car_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
};
// Handle Car create on POST.
exports.car_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Car create POST');
};
// Handle Car delete form on DELETE.
exports.car_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};
// Handle Car update form on PUT.
exports.car_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id);
};

// List of all Costumes
exports.car_list = async function(req, res) {
    try{
    theCar = await Car.find();
    res.send(theCar);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function(req, res) {
    try{
    theCar = await Car.find();
    res.render('car', { title: 'Car Search Results', results: theCar });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Car create on POST.
    exports.car_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.car_type = req.body.car_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    