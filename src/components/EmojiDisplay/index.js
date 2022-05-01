import Button from "../button";
function EmojiDisplay({
  divClass,
  emojiClass,
  emoji,
  emojiName,
  btnText,
  onClick,
  copiedClass,
  copiedText,
}) {
  return (
    <div className={divClass}>
      <p className={emojiClass}>{emoji}</p>
      <p>{emojiName}</p>
      <Button btnText={btnText} type="button" onClick={onClick} />
    </div>
  );
}

export default EmojiDisplay;
