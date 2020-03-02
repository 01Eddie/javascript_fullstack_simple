import './styles/style.css';
//import BookService from './services/BookService';
import UI from './UI.js'

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
})

document.getElementById('book-form')
    .addEventListener('submit', e => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;
        
        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);

        //console.log(title, author, isbn, image);
      //const bookService = new BookService()
        //bookService.postBook(formData)
        
        const ui = new UI();
        ui.addNewBook(formData);
        ui.renderMessage('Nuevo libro Agregado', 'success', 3000);
        

        e.preventDefault(); //Es para que al momento de enviar el formulario este ya no se reinicia

    })

document.getElementById('books-cards')
    .addEventListener('click', e=> {
        //console.log('click')
        if (e.target.classList.contains('delete')) {
            //console.log('Eliminando')
            //console.log(e.target.getAttribute('_id'))
            const ui = new UI()
            ui.deleteBook(e.target.getAttribute('_id'));
            ui.renderMessage('Libro eliminado', 'danger', 2000)
        }
        e.preventDefault();
    });