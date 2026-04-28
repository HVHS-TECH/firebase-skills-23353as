/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
let lastBook="null"




function bookOne(){
  console.log("Running bookOne()")

  lastBook = "Books/Book 1"

  firebase.database().ref('Books/Book 1').set(
    {
      Title: "Random Book",
      Author: "Me",
      Genre: "Non-Fiction",
    }
  )
}

function bookTwo(){
  console.log("Running bookTwo()")

  lastBook = "Books/Book 2"

  firebase.database().ref('Books/Book 2').set(
    {
      Title: "Better Book",
      Author: "Myself",
      Genre: "Fiction",
    }
  )
}

function bookThree(){
  console.log("Running bookThree()")

  lastBook = "Books/Book 3"

  firebase.database().ref('Books/Book 3').set(
    {
      Title: "Even Better Book",
      Author: "I",
      Genre: "Dystopian",
    }
  )
}

function lastBookSelected(){
  console.log("Reading message");
  firebase.database().ref(lastBook).once('value', displayLastBookSelected);
}

function displayLastBookSelected(snapshot) {
  let book = snapshot.val();

  console.log("Book data:", lastBook);

  HTML_OUTPUT.innerHTML = `
    Title: ${book.Title}<br>
    Author: ${book.Author}<br>
    Genre: ${book.Genre}
  `;
}