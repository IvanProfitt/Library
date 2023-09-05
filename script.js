const myLibrary=[];


function Book(title, author, pageNum, read) {
    this.title=title;
    this.author=author;
    this.pageNum=pageNum;
    this.read=read;


    this.info=function(){
        if(this.read===true){
        return (this.title + " by " + this.author + ", " + this.pageNum + " pages, already read!");
        }
        else{
            return (this.title + " by " + this.author + ", " + this.pageNum + " pages, not read yet.");
            
        }

    }
    addBookToLibrary(this);
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);


}

function displayLibrary(){
    
     
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(theHobbit.info());
console.log(myLibrary[0]);