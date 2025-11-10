



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
        className="banniere flex flex-row justify-center items-center h-[550px] max-md:flex-col
         max-md:h-[300px] max-md:bg-contain max-md:bg-center max-md:bg-no-repeat"
        style={{ backgroundImage: `url(${CirclesBanniere})` }}
      ></header>

      {/* === Titre principal === */}
      <div className="title-section text-center mt-10 mb-10">
        <h1 className="page-title h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">
          Le Week end sportif hasardeux qui ouvre tes cercles
        </h1>
        <div className="video-container flex justify-center mt-8">
          <video
            className="w-full max-w-[1200px] h-auto rounded-lg shadow-lg max-md:max-w-[90%]"
            controls
            preload="metadata"
          >
            <source src="https://storage.googleapis.com/legoff_agency/circles.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>

      {/* === Rectangle central === */}
      <img
        src={RectangleCircles}
        alt="rect"
        className="block mx-auto w-[98%] h-auto"
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
          className="block mx-auto w-[98%] h-auto"
        />
        <h1 className="page-title mt-6 h-auto max-md:top-[200px] max-md:right-[250px] max-md:w-[600px]">À propos</h1>

        <div className="relative w-full flex justify-start mt-20">
          <div className="relative">
          <img
          src={CirclesBonus}
          alt="Bonus"
          className="w-[500px] translate-x-[40px] translate-y-[140px] h-auto max-md:w-[250px] max-md:translate-y-[60px]"
        />
          <h1 className="bonus-texte absolute top-[10%] left-[1%] text-3xl font-semibold text-white drop-shadow-lg whitespace-nowrap max-md:text-lg max-md:top-[5%]">
            Offre une place à tes potes !
          </h1>
        </div>
        </div>
        <div className="relative flex flex-col items-center text-center ml-[10px] max-md:mt-[80px]">
          <h1 className="contact-texte1 text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl lg:text-2xl">
            Nous contacter : - Mail : maxime.georges056@gmail.com
          </h1>
          <h1 className="contact-texte2 text-base text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl mr-[105px] mt-[10px] max-md:translate-x-[21px]">
            - Réseaux : DM
          </h1>
        </div>
        <img
          src={CirclesTriangle}
          alt="Triangle"
          className="absolute top-[60px] left-[1350px] w-[560px] h-auto max-md:top-[100px] max-md:left-[380px] max-md:w-[250px]"
        />
      </section>
    </>
  );
}

export default App;