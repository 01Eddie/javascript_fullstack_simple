const {Router}=require('express');
const router=Router();
const {unlink} =  require('fs-extra');
const path = require('path')

const Book=require('../models/Book')

//router.get('/', (req, res) => res.json({text: 'Hello World'}))
router.get('/', async(req,res) => {
    const books = await Book.find();
    res.json (books)
})

router.post('/', async (req, res) => {
    //console.log(req.body);
    const {title, author, isbn} = req.body;
    const imagePath = '/uploads/' + req.file.filename; //-> Es para obtener el id de a imagen ya que no es optimo que la imagen sea almacenada en la base de datos
    const newBook = new Book({title, author, isbn, imagePath});
    //console.log(newBook)
    await newBook.save();
    //res.send('recibido');
    res.json({message: 'Archivo guardado'})
})

router.delete('/:id', async(req, res) => {
    //console.log(req.params.id)
    const book = await Book.findByIdAndDelete(req.params.id);
    //console.log(book);
    //res.send('Borrando');
     unlink(path.resolve('./backend/public' + book.imagePath))
    res.json({message: 'Libro eliminado'})
});

module.exports=router;