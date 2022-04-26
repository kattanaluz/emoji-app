import Input from "../input";
import { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import EmojiDisplay from "../EmojiDisplay";

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

  console.log(emojis);
  return (
    <div className={styles.App}>
      <h1>📗 Emojipedia 📗</h1>
      <Input type="text" />

      <div className={styles.emojiContainer}>
        {emojis ? (
          emojis.map((item) => {
            return (
              <EmojiDisplay
                divClass={"emojiWrapper"}
                emoji={item.emoji}
                emojiName={item.name}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
