import React, { useState, useEffect } from "react";
import { Data, Color } from "../Types";
import DisplayColors from "./DisplayColor";

interface Props {
  onColorSelect: (color: Color) => void;
}

const ColorList: React.FC<Props> = ({ onColorSelect }) => {
  const [datas, setDatas] = useState<Color[]>([]); //initialize color as array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.prolook.com/api/colors/prolook"
        ); //fetch the API
        const data: Data = await response.json();
        setDatas(data.colors); //set the Data and get the Object colors
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePreview = (color: Color) => {
    onColorSelect(color); // set selected color when button is clicked
  };

  //render colors data here.
  return (
    <div className="container-sm">
      <ul
        className="list-group"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        {datas.map((data: Color) => (
          <li key={data.id} className="list-group-item">
            {" "}
            {data.name}{" "}
            <button
              className="btn btn-primary"
              onClick={() => handlePreview(data)}
              style={{ position: "absolute", top: "5px", right: "5px" }}
            >
              Preview
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
