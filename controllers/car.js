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
// Handle car delete on DELETE.
exports.car_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Car.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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
    document.Car_color = req.body.Car_color;
    document.Car_model = req.body.Car_model;
    document.Car_Title = req.body.Car_Title;
    document.Car_mileage = req.body.Car_mileage;
    document.Car_cost = req.body.Car_cost;
    
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific Costume.
exports.Car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Car.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
//Handle Costume update form on PUT.
exports.car_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Car.findById( req.params.id)
// Do updates of properties
if(req.body.car_type)
toUpdate.car_type = req.body.car_type;
if(req.body.Car_color) toUpdate.Car_color = req.body.Car_color;
if(req.body.Car_model) toUpdate.Car_model = req.body.Car_model;
if(req.body.Car_Title) toUpdate.Car_Title = req.body.Car_Title;
if(req.body.Car_mileage) toUpdate.Car_mileage = req.body.Car_mileage;
if(req.body.Car_cost) toUpdate.Car_cost = req.body.Car_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle a show one view with id specified by query
exports.car_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Car.findById( req.query.id)
    res.render('cardetail',
    { title: 'Car Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.car_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('carcreate', { title: 'Car Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a costume.
// query provides the id
exports.car_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Car.findById(req.query.id)
    res.render('carupdate', { title: 'Car Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.car_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Car.findById(req.query.id)
    res.render('cardelete', { title: 'Car Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    