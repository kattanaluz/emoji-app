import Input from "../input";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const URL = `https://api.emojisworld.fr/v1/popular`;

  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    async function getEmoji() {
      const promise = await fetch(URL);
      const data = await promise.json();
      setEmojis(data.results);
    }
    getEmoji();
  }, []);

  emojis.forEach((item) => {
    console.log(item.emoji);
  });

  return (
    <div className="App">
      <h1>📗 Emojipedia 📗</h1>
      <Input type="text" />
      {emojis ? (
        emojis.map((item) => {
          return <p>{item.emoji}</p>;
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;
