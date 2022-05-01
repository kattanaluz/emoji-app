import Input from "../input";
import { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import EmojiDisplay from "../EmojiDisplay";

function App() {
  const URL = "https://api.emojisworld.fr/v1/";
  const [search, setSearch] = useState("popular");
  const [userInput, setUserInput] = useState();
  const [emojis, setEmojis] = useState([]);

  function getInput(event) {
    setUserInput(event.target.value);
    if (event.code === "Enter") {
      setSearch(userInput);
      console.log(URL);
    }
  }

  function copyEmoji(emoji) {
    navigator.clipboard
      .writeText(`${URL}${search}`)
      .then(() => alert(`You copied ${emoji}`));
  }

  useEffect(
    () => {
      async function getEmoji() {
        const promise = await fetch(`${URL}${search}`);
        const data = await promise.json();
        setEmojis(data.results);
      }
      getEmoji();
    },
    [],
    search
  );

  return (
    <div className={styles.App}>
      <h1>Emoji Finder 🔎</h1>
      <Input
        divClass={styles.inputWrapper}
        type="text"
        placeholder="Type to search a emoji"
        onKeyPress={getInput}
      />
      <div className={styles.emojiContainer}>
        {emojis ? (
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
