const { User } = require('../database/models');

 async function userloggedMiddleware(req,res,next)  {

    res.locals.isLogged = false;
    let userFromCookie
    let emailInCookie = req.cookies.usuarioCookie;
    if(emailInCookie)
    {
     userFromCookie = await User.findOne({where: {email: emailInCookie} })
    }

    if(userFromCookie)
    {
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){
        console.log("Pase por el middle ware de aplicacion y hay un usuaio ya logeado");
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
        console.log("El usuaio logeado es: ");
        console.log(res.locals.userLogged.email);
    }
    else{
    console.log("Pase por middleware de aplicacion y nadie esta logeadi");
    }

   
    next();

}

module.exports = userloggedMiddleware;