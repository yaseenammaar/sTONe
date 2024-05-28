import React from "react";
import styled from "styled-components";
import { Button } from "./styled/styled";

const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const PlayButton = styled(Button)`
  margin-top: 20px;
  width: 200px;
  height: 50px;
  font-size: 18px;
`;

interface HomeScreenProps {
  isConnected: boolean;
  onPlayClick: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ isConnected, onPlayClick }) => {
  return (
    <HomeScreenContainer>
      <h1>Rock Paper Scissors</h1>
      <PlayButton onClick={onPlayClick} disabled={!isConnected}>
        Start
      </PlayButton>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
