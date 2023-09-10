const myLibrary=[];
let counter=0;


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

function removeBook(indexNum){
    const elements = document.getElementsByClassName("ref"+indexNum);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }




    myLibrary[indexNum].remove();

}


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


    bookDiv.classList.add("ref"+counter);
    bookPages.classList.add("ref"+counter);
    bookName.classList.add("ref"+counter);
    bookAuthor.classList.add("ref"+counter);
    bookRead.classList.add("ref"+counter);
    
    bookDiv.className="bookDiv";
    bookDiv.classList.add("ref"+counter);
    libraryDiv.appendChild(bookDiv);
    bookDiv.append(bookName,bookAuthor,bookPages,bookRead);



     
}

const revealForm = document.getElementById('test');
const bookForm = document.getElementById("formModal");
const formForBook = document.getElementById("bookForm");
const submitButton=document.getElementById("submitButton");

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
    const bookInitialization= new Book(value1,value2,value3,value4);
    bookForm.classList.remove("show");
    bookForm.classList.add("hide");

} )

