

import CirclesBanniere from "./assets/CirclesBanniere.png";
import CirclesProgramme1 from "./assets/CirclesProgramme1.png";
import CirclesProgramme2 from "./assets/CirclesProgramme2.png";
import CirclesProgramme3 from "./assets/CirclesProgramme3.png";
import CirclesBonus from "./assets/CirclesBonus.png";
import CirclesTriangle from "./assets/CirclesTriangle.png";
import RectangleCircles from "./assets/RectangleCircles.png";
import './App.css';

function App() {
  return (
    <>
      {/* === Bannière principale === */}
      <header
        className="banniere flex flex-row justify-center items-center max-md:flex-col"
        style={{ backgroundImage: `url(${CirclesBanniere})` }}
      ></header>

      {/* === Titre principal === */}
      <div className="title-section text-center mt-10 mb-10">
        <h1 className="page-title h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">
          Le Week end sportif hasardeux qui ouvre tes cercles
        </h1>
        <h1 className="page-title mt-5 h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">
          Placeholder vidéo
        </h1>
      </div>

      {/* === Rectangle central === */}
      <img
        src={RectangleCircles}
        alt="rect"
        className="block mx-auto w-[98%] max-md:w-[90%] h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]"
      />

      {/* === Programme === */}
      <h1 className="page-title mt-10 h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">
        Le Programme
      </h1>

      <section className="programmes flex justify-center items-center flex-wrap gap-10 mt-8">
        <img
          src={CirclesProgramme1}
          alt="Programme 1"
          className="image w-[500px] max-md:w-[300px]"
        />
        <img
          src={CirclesProgramme2}
          alt="Programme 2"
          className="image w-[500px] max-md:w-[300px]"
        />
        <img
          src={CirclesProgramme3}
          alt="Programme 3"
          className="image w-[500px] max-md:w-[300px]"
        />
      </section>

      {/* === Section “À propos” === */}
      <section className="extras relative text-center mt-16 mb-20">
        <img
          src={RectangleCircles}
          alt="rect"
          className="block mx-auto w-[98%] max-md:w-[90%] h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]"
        />
        <h1 className="page-title mt-6 h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">À propos</h1>

        <div className="absolute top-[240px] right-[1280px] h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[10px]">
          <h1 className="bonus-texte text-2xl max-md:text-lg static max-md:mt-4">
            Offre une place à tes potes !
          </h1>
        </div>

        <div className="absolute top-[850px] w-[900px] right-[480px] h-auto">
          <h1 className="contact-texte1 text-2xl max-md:w-[2600px]">
            Nous contacter : - Mail : maxime.georges056@gmail.com
          </h1>
          <h1 className="contact-texte2 text-2xl max-md:w-[2600px] ml-[-57px] mt-[10px]">
            - Réseaux : DM
          </h1>
        </div>
        <img
          src={CirclesBonus}
          alt="Bonus"
          className="absolute top-[300px] right-[1380px] w-[500px] h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[350px]"
        />
        <img
          src={CirclesTriangle}
          alt="Triangle"
          className="absolute top-[60px] left-[1350px] w-[560px] h-auto max-md:top-[200px] max-md:left-[400px] max-md:w-[350px]"
        />
      </section>
    </>
  );
}

export default App;