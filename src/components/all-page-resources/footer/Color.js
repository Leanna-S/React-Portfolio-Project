function Color({ color }) {
  function handleColorChange(color) {
    sessionStorage.setItem("themeColor", color);
    document.querySelector(":root").style.setProperty("--theme-color", sessionStorage.getItem("themeColor"));
  }

  return <li className="color" style={{ backgroundColor: color }} onClick={() => handleColorChange(color)}></li>;
}

export default Color;
