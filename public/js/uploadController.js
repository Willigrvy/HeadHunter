const router = require('express').Router();
const { Image } = require('../../Model');
const fs = require("fs");

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    // look for valid file
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    //post function
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __dirname + "/uploads/" + req.file.filename
      ),
    }).then((image) => {
        //write image to folder
      fs.writeFileSync(
        __dirname + "/uploads/" + image.name,
        image.data
      );
      return  res.redirect('/');
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
module.exports = {uploadFiles,};
//C:\Users\camil\bootcamp\HeadHunter\public\js