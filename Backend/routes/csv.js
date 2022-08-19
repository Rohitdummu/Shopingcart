const express=require("express") 
const router=express.Router()
const multer = require("multer")
const csv = require("csvtojson")
sheetModel = require("../models/products")
var path = require('path')
var bodyParser = require('body-parser') 
const { route } = require("./auth")

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

router.use(bodyParser.urlencoded({ extended: false }))
router.use(express.static(path.resolve(__dirname, 'public')))
const upload = multer({storage:storage})


router.post("/uploadcsv",upload.single('file'), async(req,res)=>{
csv()
.fromFile(req.file.path)
.then((jsonObj) => {
  //insertmany is used to save bulk data in database.
  //saving the data in collection(table)
  sheetModel.insertMany(jsonObj, (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Something went wrong!",
      });
    } else {
      res.status(200).json({
        message: "File Uploaded Successfully!",
        result: data,
      });
    }
  });
  // console.log(jsonObj)
});
}
)

module.exports=router