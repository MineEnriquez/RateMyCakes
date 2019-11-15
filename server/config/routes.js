const Cakes = require('../controllers/ctrl_cakes');

module.exports = function (app) {
    app.post('/e2etest', (req, res) => {Cakes.e2etest(req, res);});
    app.get('/api/cakes/retrieveall', (req,res)=> {Cakes.retrieveAll(req, res);});
    
    app.get('/api/cakes/retrieveId/:id', (req,res)=> {Cakes.retrieveId(req, res);});
    app.post('/api/cakes/Update/:id', (req,res)=> {Cakes.updateId(req, res);});
    app.post('/api/cakes/newcake', (req, res) => {Cakes.newcake(req, res);});
    app.delete('/api/cakes/Delete/:id', (req,res)=> {Cakes.deleteId(req, res);});
    app.post('/api/cakes/addrating/:id', (req,res)=> {Cakes.rateCake(req, res);});
}