const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const multer = require('multer');
const path = require ('path');

//middlewares

const guestMiddleware = require('../middlewares/guestMiddleware');
const loggedMiddleware = require('../middlewares/loggedMiddleware');
const validator = require('../middlewares/userValidator');



//configuracion de multer

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,path.join(__dirname, '../../public/image/users/images'))
    },
    filename: (req,file,callback) => {
        const newFileName = 'usuario-' + Date.now() + path.extname(file.originalname);
        callback(null,newFileName);
    }
});

let fileUpload = multer({storage});
//GETS
router.get('/logout' , controller.logout);
router.get('/profile' , loggedMiddleware, controller.profile);
router.get('/register' ,guestMiddleware , controller.register);
router.get('/login' , guestMiddleware, controller.login);


//POST
router.post('/create',validator, controller.create);
router.post('/loginProcess' , controller.processLogin);



//DELETE



module.exports = router;