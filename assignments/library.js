const library = []
function add_books(tittle, author){
    library.push({tittle, author, availability: true});
    console.log(`${tittle} by ${author}`)
}
function available_books(){
    const available = library.filter(book => book.availability);
    if(available.length === 0){
        console.log("no available books")
    } else{
        console.log("available books:")
        available.forEach(book =>{console.log(`-${book.tittle} by ${book.author}`)})
    }
    
}
function borrow(tittle){
    const book = library.find(book => book.tittle === tittle);
    if(book && book.availability === true){  
        book.availability = false;
        console.log("enjoy the book")  
    } else if(book.availability !== true){
        console.log("the book is not available")
    }else{
        console.log("we do not have that book")
    }
}
function return_book(tittle){
    const book = library.find(book => book.tittle === tittle);
    if(book && book.availability === false){
        book.availability = false;
        console.log("thanks for returning the book")
    }else{
        console.log("that's not our book ")
    }
}


add_books("abyss", "collen hover");
add_books("The Great Gatsby", "F. Scott Fitzgerald");
add_books("1984", "George Orwell");
add_books("To Kill a Mockingbird", "Harper Lee");
available_books();
borrow("1984");
return_book("1984");
return_book("calixte");
console.log(library)