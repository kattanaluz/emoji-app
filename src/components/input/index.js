export default function Input({
  divClass,
  type,
  placeholder,
  onChange,
  onKeyPress,
}) {
  return (
    <div className={divClass}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
    </div>
  );
}
