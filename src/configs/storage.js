const multer = require("multer");
const path = require('path');

const baseDir = path.join(__dirname,"../../")

module.exports = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, baseDir + "/resources/static/uploads/");
        },
        filename: (req, file, cb) => {
          file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
          cb(null, file.originalname);
        },
      })
  })