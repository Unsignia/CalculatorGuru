import { useState } from "react";

export default function ToggleButton({
  left,
  right,
  degreeSelected,
  setSelected,
}) {
  function HandleClick() {
    setSelected(!degreeSelected);
  }

  return (
    <div className="toggle-container" onClick={HandleClick}>
      <div className={`dialog-button ${degreeSelected ? "" : "disabled"}`}>
        {!degreeSelected ? left : right}
      </div>
    </div>
  );
}
