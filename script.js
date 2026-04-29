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
let lastBook = "null";


libraryBooks = {
  Books: {
    "Book 1": {
      Title: "Random Book",
      Author: "Me",
      Genre: "Non-Fiction",
    },
    "Book 2": {
      Title: "Better Book",
      Author: "Myself",
      Genre: "Fiction",
    },
    "Book 3": {
      Title: "Even Better Book",
      Author: "I",
      Genre: "Dystopian",
    }
  }
}

firebase.database().ref('/').set(libraryBooks)
function bookOne() {
  console.log("Running bookOne()")

  lastBook = "Books/Book 1"

  firebase.database().ref('Books/Book 1').set(
    {
      Title: "Random Book",
      Author: "Me",
      Genre: "Non-Fiction",
    }
  )
  listenToLastBook();
}

function bookTwo() {
  console.log("Running bookTwo()")

  lastBook = "Books/Book 2"

  firebase.database().ref('Books/Book 2').set(
    {
      Title: "Better Book",
      Author: "Myself",
      Genre: "Fiction",
    }
  )
  listenToLastBook();
}

function bookThree() {
  console.log("Running bookThree()")

  lastBook = "Books/Book 3"

  firebase.database().ref('Books/Book 3').set(
    {
      Title: "Even Better Book",
      Author: "I",
      Genre: "Dystopian",
    }
  )
  listenToLastBook();
}

function displayLastBookSelected(snapshot) {
  let book = snapshot.val();

  if (book == null) {
    console.log("You haven't selected a book yet")

    HTML_OUTPUT.innerHTML = "You haven't selected a book yet"
  }
  else {
    console.log("Book data:", lastBook);

    HTML_OUTPUT.innerHTML = `
    Title: ${book.Title}<br>
    Author: ${book.Author}<br>
    Genre: ${book.Genre}
  `;
  }
}

function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
  HTML_OUTPUT.innerHTML = "There was an error reading this message."
}

function listenToLastBook() {
  currentRef = firebase.database().ref(lastBook);
  currentRef.on('value', displayLastBookSelected, fb_readError);
}