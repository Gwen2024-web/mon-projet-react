

import CirclesBanniere from "./assets/CirclesBanniere.png";
import CirclesProgramme1 from "./assets/CirclesProgramme1.png";
import CirclesProgramme2 from "./assets/CirclesProgramme2.png";
import CirclesProgramme3 from "./assets/CirclesProgramme3.png";
import CirclesBonus from "./assets/CirclesBonus.png";
import CirclesTriangle from "./assets/CirclesTriangle.png";
import RectangleCircles from "./assets/RectangleCircles.png";
import './App.css'

function App() {

  return (
     <>
        <header className="flex-row max-md:flex-col banniere"></header>

        <div className="title-section">
            <h1 className="flex-row max-md:flex-col page-title">Le Week end sportif hasardeux qui ouvre tes cercles</h1>
            <h1 className="flex-row max-md:flex-col mt-[20px] page-title">Placeholder vidéo</h1>
        </div>
        <img src={RectangleCircles} alt="rect" className="flex-row max-md:flex-col block mx-auto w-[98%]" />
        <h1 className="flex-row max-md:flex-col mt-[20px] page-title">Le Programme</h1>
        <section className="flex-row max-md:flex-col programmes">
        <img src={CirclesProgramme1} alt="Programme 1" className="flex-row max-md:flex-col image" />
        <img src={CirclesProgramme2} alt="Programme 2" className="flex-row max-md:flex-col image" />
        <img src={CirclesProgramme3} alt="Programme 3" className="flex-row max-md:flex-col image" />
      </section>

      {/* Autres images */}
      <section className="flex-row max-md:flex-col extras">
        <img src={RectangleCircles} alt="rect" className="flex-row max-md:flex-col block mx-auto w-[98%]" />
        <h1 className="flex-row max-md:flex-col mt-[20px] page-title">À propos</h1>
        <div style={{ position: "relative"}}>
          <h1 className="flex-row max-md:flex-col bonus-texte">Offre une place à tes potes !</h1>
        </div>
        <div style={{ position: "relative"}}>
          <h1 className="flex-row max-md:flex-col contact-texte1">Nous contacter : - Mail : maxime.georges056@gmail.com</h1>
          <h1 className="flex-row max-md:flex-col contact-texte2">- Réseaux : DM</h1>
        </div>
        <img src={CirclesBonus} alt="Bonus" className="flex-row max-md:flex-col absolute top-[2200px] right-[1380px]" />
        <img src={CirclesTriangle} alt="Triangle" className="flex-row max-md:flex-col absolute top-[1950px] left-[1350px]" />
      </section>
      </>
  );
}

export default App