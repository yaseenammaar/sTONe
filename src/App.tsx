import React, { useState, useEffect } from "react";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import HomeScreen from "./components/HomeScreen";
import DepositScreen from "./components/DepositScreen";
import GameScreen from "./components/GameScreen";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const { network } = useTonConnect();
  const [isConnected, setIsConnected] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<"home" | "deposit" | "game">("home");

  useEffect(() => {
    setIsConnected(!!network);
  }, [network]);

  const handlePlayClick = () => {
    setCurrentScreen("deposit");
  };

  const handleDepositClick = () => {
    setCurrentScreen("game");
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
  };

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          {currentScreen === "home" && <HomeScreen isConnected={isConnected} onPlayClick={handlePlayClick} />}
          {currentScreen === "deposit" && <DepositScreen onDepositClick={handleDepositClick} />}
          {currentScreen === "game" && <GameScreen onBackToHome={handleBackToHome} />}
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
};

export default App;
