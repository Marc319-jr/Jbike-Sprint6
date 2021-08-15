const express = require('express');
const router = express.Router();
const controller = require('../controller/productController');
const multer = require('multer');
const path = require ('path');

//configuracion de multer

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,path.join(__dirname, '../../public/image/productsimages'))
    },
    filename: (req,file,callback) => {
        const newFileName = 'producto-' + Date.now() + path.extname(file.originalname);
        callback(null,newFileName);
    }
});

let fileUpload = multer({storage});

//GETS
router.get('/' , controller.show)
router.get('/create' , controller.createProduct);
router.get('/:id' ,controller.show);


//POST
router.post('/upload' ,fileUpload.single('image1'), controller.uploadProtuct);



//DELTE
router.delete('/:id' , controller.destroy)





module.exports = router;

