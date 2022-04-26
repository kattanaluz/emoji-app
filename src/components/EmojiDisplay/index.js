function EmojiDisplay({ divClass, emoji, emojiName }) {
  return (
    <div className={divClass}>
      <p>{emoji}</p>
      <p>{emojiName}</p>
      <button>copy emoji</button>
    </div>
  );
}

export default EmojiDisplay;
