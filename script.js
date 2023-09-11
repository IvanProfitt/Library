const myLibrary=[];
const domLibrary=[];
const libraryDiv=document.getElementById("bookLibrary");
const revealForm = document.getElementById('test');
const bookForm = document.getElementById("formModal");
const formForBook = document.getElementById("bookForm");
const submitButton=document.getElementById("submitButton");
const delButton=document.getElementById("delButton");


function Book(title, author, pageNum, read) {
    this.title=title;
    this.author=author;
    this.pageNum=pageNum;
    this.read=read;

    console.log(read);
    
    addBookToLibrary(this, myLibrary.length);
}




function addBookToLibrary(newBook,index){
    myLibrary.push(newBook);
    displayBook(index);
}


function removeBook(indexNum){
    const delBook =document.getElementById(`book-${indexNum}`);
    delBook.parentNode.removeChild(delBook);
    myLibrary.splice(indexNum, 1);
}




function displayBook(index){
    const bookDiv=document.createElement("div");

    let bookName=document.createElement("h2");
    bookName.innerHTML=(`${myLibrary[index].title}`);
    

    let bookAuthor=document.createElement("p");
    bookAuthor.innerHTML=(`${myLibrary[index].author}`);

    let bookPages=document.createElement("p");
    bookPages.innerHTML=(`${myLibrary[index].pageNum}`);

    let bookRead=document.createElement("p");
    if (myLibrary[index].read===true){
        bookRead.innerHTML=("Have read");
    }

    else{
        bookRead.innerHTML=("Have not read");
    }

    let removeButton = document.createElement("input");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("onclick", `removeBook(${index});`);
    console.log(myLibrary);
    removeButton.setAttribute("value","Remove");



    
    bookDiv.className="bookDiv";
    bookDiv.id=`book-${index}`;
    libraryDiv.appendChild(bookDiv);
    bookDiv.append(bookName,bookAuthor,bookPages,bookRead,removeButton);



     
}







revealForm.addEventListener("click", ()=>{
    bookForm.classList.remove("hide");
    bookForm.classList.toggle('transition');
    bookForm.classList.add("show");
})

bookForm.addEventListener("click", ()=>{
    if (event.target === bookForm) {
    bookForm.classList.remove("show");
    bookForm.classList.add("hide");
    }

})

formForBook.addEventListener("submit", ()=>{
    bookForm.classList.toggle('transition');
    event.preventDefault();

    var value1 = document.getElementById('formTitle').value;
    var value2 = document.getElementById('formAuthor').value;
    var value3 = document.getElementById('formPages').value;
    var value4 = document.getElementById('formRead').checked;
    formForBook.reset();
    const bookInitialization = new Book(value1,value2,value3,value4);
    bookForm.classList.remove("show");
    bookForm.classList.add("hide");

} )

