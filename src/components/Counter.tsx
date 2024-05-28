import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";

export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement, balance } = useCounterContract(); // assuming `balance` is added to `useCounterContract` hook

  return (
    <div className="container">
      <TonConnectButton />
      {connected && (
        <div className="content">
          <div className="balance">Balance: {balance} TON</div>
          <Button onClick={sendIncrement}>Increment</Button>
        </div>
      )}
    </div>
  );
}
