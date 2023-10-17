const user = require('../models/userModels');
const bcyptjs = require('bcryptjs');




const register_user = async (req, res) => {

  try {

    const users = new user({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      images: req.file.filename

    });
    const userData = await users.save();
  }
  catch (error) {

    res.status(400).send(error.message);
  }

}

module.exports = {
  register_user
}