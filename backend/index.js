if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
//console.log(process.env.NODE_ENV)

const express=require('express')
const morgan= require('morgan')

const multer = require('multer')

const path = require('path')
const cors = require('cors')
//Initializations
const app= express();
require('./database')

//Settings
app.set('port', process.env.PORT || 3000)


//Middlewares --> Todos los middlewares es una funcion
app.use(morgan('dev'));
//De aqui sale el detalle de fecha y la extension
const storage=multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})

app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/books' ,require('./routes/books'))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//start the server
app.listen(app.get('port'), () => {
    console.log('Puerto ubicado en ', app.get('port'))
})