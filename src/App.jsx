



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
        className="banniere flex flex-row justify-center items-center h-[550px] bg-cover bg-center max-md:flex-col
         max-lg:h-[400px] max-md:h-[200px] max-md:bg-contain max-md:bg-center max-md:bg-no-repeat"
        style={{ backgroundImage: `url(${CirclesBanniere})` }}
      ></header>

      {/* === Titre principal === */}
      <div className="title-section text-center mt-10 mb-10">
        <h1 className="page-title text-3xl sm:text-4xl md:text-5xl font-semibold max-w-[90%] mx-auto break-words max-md:text-xl max-sm:text-lg">
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
        className="block mx-auto w-[90%] max-md:max-w-[600px] h-auto"
      />

      {/* === Programme === */}
      <h1 className="page-title text-center mt-10 max-w-[90%] mx-auto text-2xl sm:text-3xl md:text-4xl font-semibold break-words">
        Le Programme
      </h1>

      <section className="programmes flex flex-wrap justify-center mt-8 px-2 sm:px-4 gap-4">
        <img
          src={CirclesProgramme1}
          alt="Programme 1"
          className="w-[90%] sm:w-[45%] md:w-[300px] lg:w-[400px] xl:w-[600px] h-auto rounded-xl transition-transform duration-300 ease-in-out"
        />
        <img
          src={CirclesProgramme3}
          alt="Programme 3"
          className="w-[90%] sm:w-[45%] md:w-[300px] lg:w-[400px] xl:w-[600px] h-auto rounded-xl transition-transform duration-300 ease-in-out"
        />
      </section>

      {/* === Section “À propos” === */}
      <section className="extras text-center mt-16 mb-20 px-2 sm:px-4">
        <img
          src={RectangleCircles}
          alt="rect"
          className="block w-[90%] max-md:max-w-[600px] mx-auto h-auto"
        />
        <h1 className="page-title mt-6 max-w-[90%] mx-auto text-2xl sm:text-3xl md:text-4xl break-words">À propos</h1>

        <div className="relative w-full flex justify-start mt-20">
          <div className="relative">
          <img
          src={CirclesBonus}
          alt="Bonus"
          className="w-[500px] translate-x-[40px] translate-y-[140px] h-auto max-md:w-[150px] max-md:translate-y-[60px]"
        />
          <h1 className="bonus-texte absolute top-[10%] left-[1%] text-3xl text-white drop-shadow-lg break-words max-md:text-lg max-sm:text-base max-md:top-[5%] max-sm:top-[3%]">
            Offre une place à tes potes !
          </h1>
        </div>
        </div>
        <div className="relative flex flex-col items-center text-center mt-10 px-2 sm:px-4">
          <h1 className="contact-texte1 text-base max-sm:text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl break-words max-w-[90%] mx-auto">
            Nous contacter : - Mail : maxime.georges056@gmail.com
          </h1>
          <h1 className="contact-texte2 text-base max-sm:text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl mt-2 break-words max-w-[90%] mx-auto">
            - Réseaux : DM
          </h1>
        </div>
        <img
          src={CirclesTriangle}
          alt="Triangle"
          className="absolute top-[60px] right-[5%] w-[300px] h-auto max-lg:top-[100px] max-lg:right-[3%] max-lg:w-[200px] max-md:static max-md:mt-6 max-md:mx-auto max-md:w-[100px]"
        />
      </section>
    </>
  );
}

export default App;