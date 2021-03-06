class BookService{

    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        //return data;
        console.log(data);
        
    }

    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data)
    }

}

//module.exports = BookService; --> Es lo mismo estas 2 opciones

export default BookService;