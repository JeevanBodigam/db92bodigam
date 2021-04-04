var Fish = require('../models/fishes');
// List of all Fishs
exports.fish_list = async function (req, res) {
    try {
        theFishes = await Fish.find();
        res.send(theFishes);
    }
    catch (err) {
        res.status(500).send(`{"error": ${err}}`);
    }
    // res.send('NOT IMPLEMENTED: Fish list');
};
// for a specific Fish.
exports.fish_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Fish detail: ' + req.params.id);
};
// Handle Fish create on POST.
exports.fish_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Fish();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.fishname = req.body.fishname;
    document.habitat = req.body.habitat;
    document.classification = req.body.classification;
    document.price=req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500).send(`{"error": ${err}}`);
    }
    };
// Handle Fish delete form on DELETE.
exports.fish_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Fish delete DELETE ' + req.params.id);
};
// Handle Fish update form on PUT.
exports.fish_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Fish update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.fish_view_all_Page = async function(req, res) {
    try{
    theFishes = await Fish.find();
    console.log("njfndw")
    res.render('fishes', { title: 'Fish Search Results', results: theFishes });
    }
    catch(err){
    res.status(500).send(`{"error": ${err}}`);
    }
    };