

import CirclesBanniere from "./assets/CirclesBanniere.png";
import CirclesProgramme1 from "./assets/CirclesProgramme1.png";
import CirclesProgramme2 from "./assets/CirclesProgramme2.png";
import CirclesProgramme3 from "./assets/CirclesProgramme3.png";
import CirclesBonus from "./assets/CirclesBonus.png";
import CirclesTriangle from "./assets/CirclesTriangle.png";
import './App.css'

function App() {

  return (
     <>
        <header className="banniere"></header>

        <div className="title-section">
            <h1 className="page-title">Le Week end sportif hasardeux qui ouvre tes cercles</h1>
        </div>

        <section className="programmes">
        <img src={CirclesProgramme1} alt="Programme 1" className="image" />
        <img src={CirclesProgramme2} alt="Programme 2" className="image" />
        <img src={CirclesProgramme3} alt="Programme 3" className="image" />
      </section>

      {/* Autres images */}
      <section className="extras">
        <img src={CirclesBonus} alt="Bonus" className="extra-image" />
        <img src={CirclesTriangle} alt="Triangle" className="extra-image" />
      </section>
      </>
  );
}

export default App