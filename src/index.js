import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import SearchBar from "./SearchBar";
import TweetList from "./ListTweets";

// Datos de ejemplo de tweets
const tweetsData = [
  { text: "Tweet 1", retweets: 5, category: "Entretenimiento", isLocal: true },
  { text: "Tweet 2", retweets: 10, category: "Tecnología", isLocal: false }
  // ... otros tweets
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App />*/}
    <div className="myContainer">
      <div className="myContainer1">
        <SearchBar />
      </div>
      <div className="myContainer2">
        <TweetList tweets={tweetsData} filterText="" inThisLocation={false} />
      </div>
    </div>
  </StrictMode>
);
