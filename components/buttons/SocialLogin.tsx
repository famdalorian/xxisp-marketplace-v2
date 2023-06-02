import React, { useState, useEffect } from "react";

function SocialLogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [magic, setMagic] = useState<any>(null);

  useEffect(() => {
    import("magic-sdk").then((module) => {
      const magicInstance = new module.Magic("pk_live_A2C1FC5327BEC218", { network: "mainnet" });
      setMagic(magicInstance);
    });
  }, []);

  async function connectWallet() {
    try {
      if (magic) {
        const accounts = await magic.wallet.connectWithUI();
        if (accounts) {
          setIsLoggedIn(true);
          console.log(accounts);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async function showWallet() {
    try {
      if (magic) {
        await magic.wallet.showUI();
        const emailInfo = await magic.wallet.requestUserInfoWithUI({
          scope: { email: "required" },
        });
        console.log(emailInfo.email);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async function disconnectWallet() {
    try {
      if (magic) {
        await magic.wallet.disconnect();
        setIsLoggedIn(false);
        console.log("Disconnected from wallet");
      }
    } catch (error) {
      console.error("An error occurred while disconnecting:", error);
    }
  }

  return (
    <div>
      {!isLoggedIn && <button onClick={connectWallet}>Connect Wallet</button>}
      {isLoggedIn && (
        <>
          <button onClick={showWallet}>Display Wallet</button>
          <br />
          <br />
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <br />
          <br />
        </>
      )}
    </div>
  );
}

export default SocialLogIn;
