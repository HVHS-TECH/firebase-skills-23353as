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
    "Dwayne": 300,
    "Gary": 1300000,
    "Patrick": 30,
    "Spongebob": 31 
  },
  "Game 2": {
    "Ben Britton": 47,
    "Dwayne": 46,
    "Gary": 130,
    "Patrick": 300,
    "Spongebob": 310 
  },
  "Game 3": {
    "Ben Britton": 100000,
    "Dwayne": 0,
    "Gary": 132,
    "Patrick": 307,
    "Spongebob": 341 
  }
};


firebase.database().ref('/').set(highScores);


function fb_readHighScores() {

  console.log("Reading High Scores");

  firebase.database().ref('/Game 1').orderByValue().limitToLast(4).once('value', fb_displayHighScores, fb_readError);
}


function fb_readError(error) {
  console.log("There was an error reading the data");
  console.error(error);
  HTML_OUTPUT.innerHTML = "There was an error reading this data.";
}


function fb_displayHighScores(snapshot) {

  let scores = [];

  snapshot.forEach(function(child) {
    scores.push({
      name: child.key,
      score: child.val()
    });
  });

  scores.reverse();

  for (let i = 0; i < scores.length; i++) {
    console.log(scores[i].name + " scored " + scores[i].score);
  }
}


let games = Object.keys(highScores);

for (let i = 0; i < games.length; i++) {

  let game = games[i];

  console.log(
    "Score " + i +
    " is for " + game +
    ". Ben Britton: " + highScores[game]["Ben Britton"] +
    ", Dwayne: " + highScores[game]["Dwayne"]
  );
}



function fb_showOneScore(child){

  let gameName = child.key;
  let scores = child.val();

  let players = Object.keys(scores);

  for (let i = 0; i < players.length; i++) {

    let player = players[i];

    console.log(
      gameName + " | " +
      player + " got " +
      scores[player] + " points"
    );
  }
}