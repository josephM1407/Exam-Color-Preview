import React from "react";
import { Color } from "../Types";

interface ChildProps {
  color: Color; // Define the type of the data being passed
}

const DisplayColors: React.FC<ChildProps> = ({ color }) => {
  const getContrastTextColor = (hexColor: string): string => {
    // Convert hex color to RGB
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    // Calculate luminance (perceptual brightness)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return white or black based on luminance
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  const style: React.CSSProperties = {
    backgroundColor: color ? `#${color.hex_code}` : "transparent",
    color: color ? getContrastTextColor(color.hex_code) : "#000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
    height: "300px",
    border: "1px solid black",
  };

  if (!color) {
    return <p>No Data to Preview</p>;
  }
  return (
    <div className="d-inline-flex p-2 w-100%" style={style}>
      <p>name: {color.name}</p>
      <p>Hex: {color.hex_code}</p>
      <p>color code: {color.color_code}</p>
    </div>
  );
};
export default DisplayColors;
