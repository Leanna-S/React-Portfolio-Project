import { useEffect } from "react";
import Color from "./Color";
function ColorPicker() {
  const colors = ["hsl(272, 100%, 64%)", "hsl(0, 100%, 64%)", "hsl(107, 68%, 43%)", "hsl(207, 100%, 64%)", "hsl(48, 85%, 53%)"];
  useEffect(() => {
    document.querySelector(":root").style.setProperty("--theme-color", sessionStorage.getItem("themeColor"));
  }, []);
  return (
    <div className="color-changer">
      <h3>Theme Color</h3>
      <ul>
        {colors.map((color, index) => (
          <Color color={color} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ColorPicker;
