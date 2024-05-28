import { getDatabase, ref, set, onValue } from "firebase/database";
import { database } from "./firebase.js";

const room = "gameRoom1"; // You can dynamically generate or assign rooms as needed
const user = `user_${Math.floor(Math.random() * 10000)}`; // Unique identifier for each user

function makeChoice(choice) {
  set(ref(database, `rooms/${room}/${user}`), {
    choice: choice,
  });
}

onValue(ref(database, `rooms/${room}`), (snapshot) => {
  const data = snapshot.val();
  if (data) {
    const players = Object.keys(data);
    if (players.length === 2) {
      const [player1, player2] = players;
      const choice1 = data[player1].choice;
      const choice2 = data[player2].choice;

      const result = getWinner(choice1, choice2);
      document.getElementById("result").innerText = `Result: ${result}`;
    }
  }
});

function getWinner(choice1, choice2) {
  if (choice1 === choice2) {
    return 'draw';
  } else if (
    (choice1 === 'rock' && choice2 === 'scissors') ||
    (choice1 === 'scissors' && choice2 === 'paper') ||
    (choice1 === 'paper' && choice2 === 'rock')
  ) {
    return 'player1 wins';
  } else {
    return 'player2 wins';
  }
}
