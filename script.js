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
function bookOne(){
  console.log("Running bookOne()")
  firebase.database().ref('Books/Book 1').set(
    {
      Title: Random Book,
      Author: Me,
      Genre: Non-Fiction,
    }
  )
}

function bookeTwo(){
  console.log("Running bookTwo()")
  firebase.database().ref('Books/Book 2').set(
    {
      Title: Better Book,
      Author: Me,
      Genre: Fiction,
    }
  )
}

function bookThree(){
  console.log("Running bookThree()")
  firebase.database().ref('Books/Book 3').set(
    {
      Title: Even Better Book,
      Author: Me,
      Genre: Dystopian,
    }
  )
}