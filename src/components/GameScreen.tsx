import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./styled/styled";

const GameScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const EmojiButton = styled(Button)`
  font-size: 50px;
  margin: 20px;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ChoiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  font-size: 50px;
  margin: 10px;
  border-radius: 8px;
  color: white;
`;

const PlayerChoiceBox = styled(ChoiceBox)`
  background-color: green;
`;

const OpponentChoiceBox = styled(ChoiceBox)`
  background-color: red;
`;

const ResultText = styled.div`
  font-size: 24px;
  margin-top: 20px;
`;

const BackButton = styled(Button)`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  font-size: 16px;
`;

const prizeAmount = 1.8;

interface GameScreenProps {
  onBackToHome: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onBackToHome }) => {
  const [result, setResult] = useState<string | null>(null);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [wonTon, setWonTon] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const choices = ["rock", "paper", "scissors"];
  const choiceEmojis: Record<string, string> = { rock: "✊", paper: "✋", scissors: "✌️" };
  const resultEmojis: Record<string, string> = { win: "😃", lose: "😢" };
  

  const handleEmojiClick = (playerChoice: string) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(playerChoice, computerChoice);
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
    setWonTon(gameResult === "win" ? prizeAmount : 0);
    setGameOver(true);
  };

  const getResult = (playerChoice: string, computerChoice: string) => {
    if (playerChoice === computerChoice) {
      return "draw";
    }
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      return "win";
    }
    return "lose";
  };

  const handleRematch = () => {
    setResult(null);
    setPlayerChoice(null);
    setComputerChoice(null);
    setWonTon(null);
    setGameOver(false);
  };

  return (
    <GameScreenContainer>
      {!gameOver ? (
        <h1>Choose Your Move</h1>
      ) : (
        <ResultText>
          {result === "win" && (
            <>
              You Won! {resultEmojis.win}
            </>
          )}
          {result === "lose" && (
            <>
              You Lose {resultEmojis.lose}
            </>
          )}
        </ResultText>
      )}
      {!gameOver ? (
        <div>
          <EmojiButton onClick={() => handleEmojiClick("rock")}>✊</EmojiButton>
          <EmojiButton onClick={() => handleEmojiClick("scissors")}>✌️</EmojiButton>
          <EmojiButton onClick={() => handleEmojiClick("paper")}>✋</EmojiButton>
        </div>
      ) : (
        <>
          <ResultContainer>
            <PlayerChoiceBox>{choiceEmojis[playerChoice || ""]}</PlayerChoiceBox>
            <OpponentChoiceBox>{choiceEmojis[computerChoice || ""]}</OpponentChoiceBox>
          </ResultContainer>
          {wonTon !== null && result !== "draw" && (
            <ResultText>You won {wonTon} TON!</ResultText>
          )}
          {result === "draw" ? (
            <BackButton onClick={handleRematch}>Rematch</BackButton>
          ) : (
            <BackButton onClick={onBackToHome}>Back to Home</BackButton>
          )}
        </>
      )}
    </GameScreenContainer>
  );
};

export default GameScreen;
