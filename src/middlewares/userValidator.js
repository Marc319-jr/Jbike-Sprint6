const path = require('path');
const {  body } = require('express-validator');

const validator = [ 
                   body('firstname').isLength({max: 15}).withMessage("El campo nombre debe tener un maximo de 15 caracteres"),    
                   body('firstname').notEmpty().withMessage("El campo nombre no debe quedar vacio y debe tener un maximo de 15 caracteres").bail(),

                   body('lastname').isLength({max: 15}).withMessage("El campo apellido debe tener un maximo de 15 caracteres"),    
                   body('lastname').notEmpty().withMessage("El campo apellido no debe quedar vacio y debe tener un maximo de 15 caracteres").bail(),

                   body('phone').notEmpty().withMessage("El campo telefono no debe quedar avcio"),
                   body('phone').isInt().withMessage("El campo telefono debe contener unicamente numeros"),
                   body('phone').isLength({min: 9 , max: 10}).withMessage("El campo telefono debe contener 10 digitos"),

                   body('email').notEmpty().withMessage("El campo email no debe quedar vacion"),
                   body('email').isEmail().withMessage("El campo email debe contener un email valido").bail(),

                   body('password').notEmpty().withMessage("El campo password no debe quedar vacio"),
                   body('password').isLength({min: 6 , max: 20}).withMessage("El campo password debe tener minimo 6 caracteres y maximo 20"),

                   body('genre').notEmpty().withMessage("El campo genero no debe queda vacio"),

                   body('rol').notEmpty().withMessage("El campo rol no debe quedar vacio")    
                 ];
    



    
    
    
    /*
    check('imagen').custom((value, {req}) => {
        let file = req.file;
        if(file == undefined)
        {
            throw new Error('Tienes que subir una imagen')
        }
        else{
        let fileExt = path.extname(file.originalname)
        let acceptedExtensions = ['.jpg' , '.png' , '.gif' , '.jpeg'];
        if(!acceptedExtensions.includes(fileExt))
        {
            throw new Error('la extension validas son: ' + acceptedExtensions.join(', '))
        }}
        return true;
    })*/





module.exports = validator;