const mongoose = require('mongoose');
const MongModels = require('../models/model_cake');
const flash = require('express-flash');
const Cake = MongModels.Cake;

module.exports = {
    e2etest: function (req, res) {
        console.log("Client - Server E2E test: ");
        console.log(`Post event recived value: ${req.body.data}`);
        console.log();
    },
    retrieveAll: function (req, res) {
        console.log("--------------------------");
        console.log("Retrieve all documents")
        Cake.find()
            .then(cakes => {
                console.log(cakes);
                res.json(cakes);   // NOTE: if API then we should return only the JSON object.
            })
            .catch(err => res.json(err));
    },
    retrieveId: function (req, res) {
        console.log("--------------------------");
        console.log("Retrieve one document");
        Cake.find({ _id: req.params.id })
            .then(data => {
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },
    updateId: function (req, res) {
        console.log("--------------------------");
        console.log("Update a document");
        console.log(req.body);
        Cake.update({ _id: req.params.id }, req.body)
            .then(data => {
                console.log(data);
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },
    deleteId: function (req, res) {
        console.log("--------------------------");
        console.log(`*** Deleting:   ${req.params.id}`);
        Cake.remove({ _id: req.params.id })
            .then(data => {
                res.json({ "Data removed": req.params.name })
            })
            .catch(err => res.json(err));
    },
    newcake: function (req, res) {
        console.log("Add a new record/document");
        _newcake = req.body;
        console.log("---------------------------");
        console.log(_newcake);
        cake = new Cake(_newcake);
        cake.save()
            .then(saveResult => res.json(saveResult))
            .catch(err => {
                console.log("Error creating a new Cake record");
                res.json(err);
            });
    }

}