import Input from "../input";
import { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import EmojiDisplay from "../EmojiDisplay";

function App() {
  //basic url string
  const URL = "https://api.emojisworld.fr/v1/";

  const [query, setQuery] = useState();
  const [emojis, setEmojis] = useState([]);

  // fnc to get user input
  function getInput(event) {
    if (event.code === "Enter") {
      setQuery(event.target.value);
      console.log(query);
    }
  }

  useEffect(() => {
    async function getEmoji() {
      try {
        if (!query) {
          const promise = await fetch(`${URL}popular`);
          const data = await promise.json();
          setEmojis(data.results);
        } else {
          const promise = await fetch(`${URL}search?q=${query}`);
          const data = await promise.json();
          setEmojis(data.results);
          console.log(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getEmoji();
  }, [query]);

  // fnc that enables the user click and copy emoji
  function copyEmoji(emoji) {
    navigator.clipboard
      .writeText(emoji)
      .then(() => alert(`You copied: ${emoji}`));
  }

  return (
    <div className={styles.App}>
      <h1>Emoji Finder 🔎</h1>
      <Input
        divClass={styles.inputWrapper}
        type="text"
        placeholder="Type to search emoji"
        onKeyPress={getInput}
      />
      <div className={styles.emojiContainer}>
        {emojis && emojis.length > 0 ? (
          emojis.map((item, index) => {
            return (
              <EmojiDisplay
                divClass={styles.emojiWrapper}
                emojiClass={styles.emoji}
                emoji={item.emoji}
                emojiName={item.name}
                btnText={"copy emoji"}
                onClick={() => copyEmoji(item.emoji)}
                key={index}
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
