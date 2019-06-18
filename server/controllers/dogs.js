const mongoose = require("mongoose");
const Dog = mongoose.model("Dog");

class Dogs {

    index(req, res){
        Dog.find({}, (err, dogs) => {
            if(err) {
                console.log(err);
            }
            res.render("index", {dogs});
        });
    }

    create(req, res){
        let c = new Dog(req.body);
        c.save(err => {
            if(err) {
                console.log(err);
            }   
            res.redirect("/");
        });
    }

    edit(req, res){
        Dog.findOne({_id: req.params._id}, (err, dog) => {
            if(err) {
                console.log(err);
            }
            res.render("edit", {dog});
        });
    }

    update(req, res){
        Dog.findOneAndUpdate({_id: req.params._id}, req.body, { runValidators: true }, err => {
            if(err) {
                console.log(err);
            }
            // console.log(req.params._id);
            res.redirect("/");
        });
    }
    destroy(req, res){
        Dog.findOneAndDelete({_id: req.params._id}, err => {
            if(err) {
                console.log(err);
            }
            res.redirect("/");
        });
    }
    view(req, res){
        Dog.findOne({_id: req.params._id}, (err, dog) => {
            if(err) {
                console.log(err);
            }
            res.render("view", {dog});
        });
    }

}

module.exports = new Dogs();