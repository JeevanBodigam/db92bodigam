var Fish = require('../models/fishes');
// List of all Fishs
exports.fish_list = async function (req, res) {
    try {
        theFishes = await Fish.find();
        res.send(theFishes);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    // res.send('NOT IMPLEMENTED: Fish list');
};
// for a specific Fish.
exports.fish_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Fish.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Fish create on POST.
exports.fish_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Fish();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Fishtype":"goat", "cost":12, "size":"large"}
    document.fishname = req.body.fishname;
    document.habitat = req.body.habitat;
    document.classification = req.body.classification;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle Fish delete on DELETE.
exports.fish_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Fish.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Fish update form on PUT.
exports.fish_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Fish.findById( req.params.id)
        // Do updates of properties
        if(req.body.fishname) toUpdate.fishname = req.body.fishname;
        if(req.body.habitat) toUpdate.habitat = req.body.habitat;
        if(req.body.classification) toUpdate.classification = req.body.classification;
        if(req.body.price) toUpdate.price=req.body.price
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.fish_view_all_Page = async function (req, res) {
    try {
        theFishes = await Fish.find();
        console.log("njfndw")
        res.render('fishes', { title: 'Fish Search Results', results: theFishes });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle a show one view with id specified by query
exports.fish_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Fish.findById( req.query.id)
        res.render('fishdetail', 
{ title: 'Fish Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for creating a fish.
// No body, no in path parameter, no query.
// Does not need to be async
exports.fish_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('fishcreate', { title: 'Fish Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a fish.
// query provides the id
exports.fish_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Fish.findById(req.query.id)
        res.render('fishupdate', { title: 'Fish Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.fish_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Fish.findById(req.query.id)
        res.render('fishdelete', { title: 'Fish Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


