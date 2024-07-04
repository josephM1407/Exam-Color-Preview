import { useState } from "react";
import ColorList from "./components/ListGroup";
import DisplayColors from "./components/DisplayColor";
import { Color } from "./Types";

function App() {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const handleColorSelect = (color: Color) => {
    setSelectedColor(color);
  };

  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
    height: "300px",
    border: "1px solid black",
    fontWeight: "bold",
  };

  return (
    <div className="container">
      <h1>Colors</h1>
      <div className="row">
        <div className="col-sm">
          <ColorList onColorSelect={handleColorSelect} />
        </div>
        <div className="col-sm">
          {!selectedColor ? (
            <div style={style}>
              <p>No Data to Preview</p>
            </div>
          ) : (
            <DisplayColors color={selectedColor} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
