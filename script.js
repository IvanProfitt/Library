const myLibrary=[];
let counter=0;
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);


function Book(title, author, pageNum, read) {
    this.title=title;
    this.author=author;
    this.pageNum=pageNum;
    this.read=read;


    function returnTitle(){
        return this.title;
    }


    this.info=function(){
        if(this.read===true){
        return (this.title + " by " + this.author + ", " + this.pageNum + " pages, already read!");
        }
        else{
            return (this.title + " by " + this.author + ", " + this.pageNum + " pages, not read yet.");
            
        }

    }
    addBookToLibrary(this);
    displayBook();
    counter=counter+1;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);


}



console.log(theHobbit.info());
console.log(myLibrary[0]);

function displayBook(){
    const libraryDiv=document.getElementById("bookLibrary");
    const bookDiv=document.createElement("div");
    let bookName=document.createElement("h2");
    bookName.innerHTML=(`${myLibrary[counter].title}`);
    let bookAuthor=document.createElement("p");
    bookAuthor.innerHTML=(`${myLibrary[counter].author}`);
    let bookPages=document.createElement("p");
    bookPages.innerHTML=(`${myLibrary[counter].pageNum}`);
    let bookRead=document.createElement("p");
    
    if (myLibrary[counter].read===true){
        bookRead.innerHTML=("Have read");
    }

    else{
        bookRead.innerHTML=("Have not read");
    }
    
    bookDiv.className="bookDiv";
    libraryDiv.appendChild(bookDiv);
    bookDiv.append(bookName,bookAuthor,bookPages,bookRead);



     
}

const revealForm = document.getElementById('test');
const bookForm = document.getElementById("formModal");
const formForBook = document.getElementById("bookForm");
const submitButton=document.getElementById("submitButton");

revealForm.addEventListener("click", ()=>{
    bookForm.classList.remove("hide");
} )

formForBook.addEventListener("submit", ()=>{
    bookForm.classList.add("hide");

} )

