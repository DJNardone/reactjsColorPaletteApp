import React from "react";
import CssOptionsList from "./CssOptionsList";
import SelectedCssOption from "./SelectedCssOption";

/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/

const CssOptions = (props) => (
  <div>
    <CssOptionsList selectColor={props.selectColor} />
    <SelectedCssOption
      selectedColor={props.selectedColor}
      palette={props.palette}
      addToPalette={props.addToPalette}
    />
    <h2>CSS Color Options</h2>
    <div className="color-options-row"></div>
  </div>
);

export default CssOptions;
