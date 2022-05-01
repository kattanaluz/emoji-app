function Button({ divClass, type, onClick, btnText }) {
  return (
    <div className={divClass}>
      <button type={type} onClick={onClick}>
        {btnText}
      </button>
    </div>
  );
}
export default Button;
