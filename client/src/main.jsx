import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { StateContextProvider } from "./context";
import App from "./App";
import { Sepolia } from "@thirdweb-dev/chains"
import './index.css'

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ThirdwebProvider activeChain={Sepolia}>
      <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
      </Router>
    </ThirdwebProvider>
);
