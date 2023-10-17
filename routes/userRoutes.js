const express = require('express');
const user_routes = express();

const bodyParser = require('body-parser');
user_routes.use(bodyParser.json());
user_routes.use(bodyParser.urlencoded({ extended: true }));

//
const multer = require("multer");
const path = require("path");

user_routes.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'), function (err, success) {

      if (err) {
        throw err
      }

    });
  },

  filename: function (req, file, cb) {

    const name = Date.now() + '-' + file.originalname;
    cb(null, name, function (error, success) {

      if (error) {
        throw error
      }

    });

  }
});

const upload = multer({ storage: storage });
//

const user_controller = require('../controllers/userControllers');

user_routes.get('/getData', upload.single('images'), user_controller.register_user);

module.exports = user_routes;

