const express = require('express');
const morgan = require('morgan');

const app = express();


//Configuraciones 
app.set('port', process.env.Port || 4000); 


//Middlewars 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 

//Rutas
app.use(require('./routes/index.js'));
app.use('/users', require('./routes/users'));
app.use('/albums',require('./routes/albums'));

// Servidor
app.listen(app.get('port'), () => {
    console.log('server or port', app.get('port'));
    
});