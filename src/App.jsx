

import imgCircles from "C:/Users/gwend/OneDrive/Documents/DesktopCircles.png";
import './App.css'

function App() {

  return (
        <div>
      <img src={imgCircles} 
           alt="Circle" style={{
           width: "100%",
           height: "100%",
           display: "block",
           margin: "20px auto",
           border: "2px solid white",
           objectFit: "cover", // couvre tout l’écran sans déformation
        }}/>
        </div>
  );
}

export default App
