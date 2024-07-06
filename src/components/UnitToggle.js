import React, { useContext } from "react";
import { UnitContext } from "../context/UnitContext";
import "./UnitToggle.css";

const UnitToggle = () => {
  const { unit, toggleUnit } = useContext(UnitContext);

  return (
    <div className="unit-toggle">
      <button onClick={toggleUnit}>
        Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
};

export default UnitToggle;
