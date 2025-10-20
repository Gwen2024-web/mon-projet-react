

import CirclesBanniere from "C:/Users/gwend/OneDrive/Documents/CirclesBanniere.png";
import CirclesProgramme1 from "C:/Users/gwend/OneDrive/Documents/CirclesProgramme1.png";
import CirclesProgramme2 from "C:/Users/gwend/OneDrive/Documents/CirclesProgramme2.png";
import CirclesProgramme3 from "C:/Users/gwend/OneDrive/Documents/CirclesProgramme3.png";
import CirclesBonus from "C:/Users/gwend/OneDrive/Documents/CirclesBonus.png";
import CirclesTriangle from "C:/Users/gwend/OneDrive/Documents/CirclesTriangle.png";
import './App.css'

function App() {

  return (
        <div className="image-container">
      <img src={CirclesBanniere} 
           alt="Circle" style={{
           width: "100%",
           height: "100%",
           display: "flex",
           justifyContent: "top",
           alignItems: "center",
           margin: "20px auto",
           border: "2px solid white",
        }}/>
        <div className="texte-bas">
            <h1 className="text-3xl font-bold" style={{
            color: 'black',
            }}>Le Week end sportif hasardeux qui ouvre tes cercles</h1>
      </div>
      <img src={CirclesProgramme1}
           alt="Circle" style={{}}/>
      <img src={CirclesProgramme2}
           alt="Circles" style={{}}/>
      <img src={CirclesProgramme3}
           alt="Circles" style={{}}/>
      <img src={CirclesBonus}
           alt="Circles" style={{}}/>
      <img src={CirclesTriangle}
           alt="Circles" style={{}}/>
        </div>
  );
}

export default App
