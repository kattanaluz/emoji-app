export default function Input({ divClass, type, placeholder }) {
  return (
    <div className={divClass}>
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
}
