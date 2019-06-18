const Dogs = require('../controllers/dogs');

module.exports = function(app) {
    app.get("/", Dogs.index);
    app.post("/create", Dogs.create);
    app.get("/edit/:_id", Dogs.edit);
    app.post("/update/:_id", Dogs.update);
    app.get("/destroy/:_id", Dogs.destroy);
    app.get("/:_id", Dogs.view);
}