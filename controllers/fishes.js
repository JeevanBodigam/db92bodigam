var Fish = require('../models/fishes');
// List of all Fishs
exports.fish_list = async function (req, res) {
    try {
        theFishes = await Fish.find();
        res.send(theFishes);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
    // res.send('NOT IMPLEMENTED: Fish list');
};
// for a specific Fish.
exports.fish_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Fish detail: ' + req.params.id);
};
// Handle Fish create on POST.
exports.fish_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Fish create POST');
};
// Handle Fish delete form on DELETE.
exports.fish_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Fish delete DELETE ' + req.params.id);
};
// Handle Fish update form on PUT.
exports.fish_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Fish update PUT' + req.params.id);
};