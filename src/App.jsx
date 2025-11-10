



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
        className="banniere flex flex-row justify-center items-center max-md:flex-col
         max-md:h-[300px] max-md:bg-contain max-md:bg-center max-md:bg-no-repeat"
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
        className="block mx-auto w-[98%] max-md:w-[90%] h-auto"
      />

      {/* === Programme === */}
      <h1 className="page-title mt-10 h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">
        Le Programme
      </h1>

      <section className="programmes flex flex-wrap justify-center gap-10 mt-8">
        <img
          src={CirclesProgramme1}
          alt="Programme 1"
          className="block mx-auto w-full max-w-[600px] h-auto rounded-xl transition-transform duration-300 ease-in-out"
        />
        <img
          src={CirclesProgramme2}
          alt="Programme 2"
          className="block mx-auto w-full max-w-[600px] h-auto rounded-xl transition-transform duration-300 ease-in-out"
        />
        <img
          src={CirclesProgramme3}
          alt="Programme 3"
          className="block mx-auto w-full max-w-[600px] h-auto rounded-xl transition-transform duration-300 ease-in-out"
        />
      </section>

      {/* === Section “À propos” === */}
      <section className="extras relative text-center mt-16 mb-20">
        <img
          src={RectangleCircles}
          alt="rect"
          className="block mx-auto w-[98%] max-md:w-[90%] h-auto"
        />
        <h1 className="page-title mt-6 h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">À propos</h1>

        <div className="relative flex flex-col items-center text-center mt-[150px] mr-[1280px] max-md:translate-y-[-150px] max-md:translate-x-[50px]">
          <h1 className="bonus-texte text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl lg:text-2xl">
            Offre une place à tes potes !
          </h1>
        </div>

        <div className="relative flex flex-col items-center text-center mt-[600px] ml-[10px] max-md:mt-[180px] max-md:translate-x-[-160px]">
          <h1 className="contact-texte1 text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl lg:text-2xl">
            Nous contacter : - Mail : maxime.georges056@gmail.com
          </h1>
          <h1 className="contact-texte2 text-base text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl mr-[105px] mt-[10px] max-md:translate-x-[21px]">
            - Réseaux : DM
          </h1>
        </div>
        <img
          src={CirclesBonus}
          alt="Bonus"
          className="absolute top-[300px] right-[1380px] w-[500px] h-auto max-md:top-[200px] max-md:right-[1075px] max-md:w-[250px]"
        />
        <img
          src={CirclesTriangle}
          alt="Triangle"
          className="absolute top-[60px] left-[1350px] w-[560px] h-auto max-md:top-[95px] max-md:left-[380px] max-md:w-[250px]"
        />
      </section>
    </>
  );
}

export default App;