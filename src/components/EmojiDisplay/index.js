function EmojiDisplay({ divClass, emojiClass, emoji, emojiName, btnText }) {
  return (
    <div className={divClass}>
      <p className={emojiClass}>{emoji}</p>
      <p>{emojiName}</p>
      <button>{btnText}</button>
    </div>
  );
}

export default EmojiDisplay;
