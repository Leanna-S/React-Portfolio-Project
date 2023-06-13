function Button({ icon, handleOnClick, text = "", styling = null }) {
  return (
    <button className={styling} onClick={() => handleOnClick()}>
      <i className={icon}></i>
      <p>{text}</p>
    </button>
  );
}

export default Button;
