const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.json())
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

const indexRouter = require('../src/routes/index.js')

app.use('/' , indexRouter)


app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto' + PORT)
}

);
