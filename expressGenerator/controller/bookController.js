var model = require('../models/bookModel');

const GetByID = (req, res) => {
    model.findById(req.params.id, (err, data) => {
        if(err) {
            response = {"error" : true, "message": err};
        } else {
            response = {"error": false, "message": data};
        }

        res.json(response);
    });
};

const GetAll = (req, res) => {
    model.find((err, data) => {
        if(err) {
            response = {"error" : true, "message": err};
        } else {
            response = {"error": false, "message": data};
        }

        res.json(response);
    });
};

const Create = (req, res) => {
    var book = new model(req.body);

    book.save((err) => {
        if(err) {
            return next(err);
        }
        res.send("Book Created");
    });
};

const Update = (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if(err) return next(err);
        res.send('book updated');
    });
};

const Delete = (req, res ) => {
    model.findByIdAndDelete(req.params.id, (err) => {
        if(err) return next(err);
        res.send('book deleted');
    });
};

module.exports = {GetByID, GetAll, Create, Update, Delete};
