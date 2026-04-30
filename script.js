/**************************************************************
 **************************************************************
 ** script.js
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/

let highScores = {
  "Game 1": {
    "Ben Britton": 3,
    "Dwayne J": 300
  },
  "Game 2": {
    "Ben Britton": 47,
    "Dwayne J": 46
  },
  "Game 3": {
    "Ben Britton": 100000,
    "Dwayne J": 0
  }
};


firebase.database().ref('/').set(highScores);


function fb_readHighScores() {

  console.log("Reading High Scores");

  firebase.database()
    .ref('/')   // IMPORTANT: matches your structure now
    .once('value', fb_displayHighScores, fb_readError);
}


function fb_readError(error) {
  console.log("There was an error reading the data");
  console.error(error);
  HTML_OUTPUT.innerHTML = "There was an error reading this data.";
}


function fb_displayHighScores(snapshot) {

  let data = snapshot.val();

  if (!data) {
    console.log("No data returned from Firebase");
    return;
  }

  let games = Object.keys(data);

  for (let i = 0; i < games.length; i++) {

    let game = games[i];

    console.log(
      game +
      " | Ben Britton: " +
      data[game]["Ben Britton"] +
      " | Dwayne J: " +
      data[game]["Dwayne J"]
    );
  }
}


let games = Object.keys(highScores);

for (let i = 0; i < games.length; i++) {

  let game = games[i];

  console.log(
    "Score " + i +
    " is for " + game +
    ". Ben: " + highScores[game]["Ben Britton"] +
    ", Dwayne: " + highScores[game]["Dwayne J"]
  );
}