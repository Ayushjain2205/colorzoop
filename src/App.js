import "./App.css";
import ColorPalette from "./ColorPalette";
import seedColors from "./seedPalletes";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div>
      <ColorPalette palette={generatePalette(seedColors[3])} />
    </div>
  );
}

export default App;
