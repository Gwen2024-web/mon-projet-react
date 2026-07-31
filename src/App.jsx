import CirclesBanniere from "./assets/CirclesBanniere.png";
import CirclesProgramme1 from "./assets/CirclesProgramme1.png";
import CirclesProgramme2 from "./assets/CirclesProgramme2.png";
import CirclesProgramme3 from "./assets/CirclesProgramme3.png";
import CirclesBonus from "./assets/CirclesBonus.png";
import CirclesTriangle from "./assets/CirclesTriangle.png";
import RectangleCircles from "./assets/RectangleCircles.png";
import './App.css';


const programmeCards = [
  { image : CirclesProgramme1, label: "Le concept"},
  { image : CirclesProgramme2, label: "Les activités"},
  { image : CirclesProgramme3, label: "Le week-end"}
];

function App() {
  return (
    <main>
      <section className="hero" id="accueil">
        <img className="hero__image" src={CirclesBanniere} alt="Participants réunis au festival Circles" />
        <div className="hero__shade" />
        <header className="nav wrap">
          <a className="nav__brand" href="#accueil" aria-label="Circles, accueil">circles</a>
          <nav aria-label="Navigation principale"><a href="#concept">Le concept</a><a href="#programme">Programme</a><a href="#contact">Contact</a></nav>
        </header>
        <div className="hero__content wrap"><p className="eyebrow">10-12 octobre ⸳ 50 personnes</p><h1>Le weekend-sportif<br />qui agrandit tes cercles.</h1><p className="hero__intro">Trois jours de sport, de son et de rencontres inattendues, loin du quotidien.</p><a className="button button--light" href="#programme">Découvrir l'expérience <span aria-hidden="true"></span></a></div>
        <p className="hero__scroll">Faire défiler <span aria-hidden="true">↓</span></p>
      </section>
      <section className="statement wrap" id="concept"><p className="eyebrow">01 ⸳ L'idée</p><div><h2>Venir seul.<br /><em>Repartir entouré.</em></h2><p>Circles est un week-end à taille humaine : des jeux, du sport et des moments simples pour créer de vraies connexions.</p></div></section>
      <section className="video-section"><div className="wrap video-section__grid"><div><p className="eyebrow">02 ⸳ L'ambiance</p><h2>Une parenthèse<br /> qui bouge.</h2></div><div className="video-frame"><video controls preload="metadata" data-testid="main-video" aria-label="Film de présentation de l'événement Circles"><source src="https://storage.googleapis.com/legoff_agency/circles.mp4" type="video/mp4" /></video></div></div></section>
      <section className="programme wrap" id="programme"><div className="section-heading"><div><p className="eyebrow">03 ⸳ Au programme</p><h2>Trois jours<br />pour se rencontrer.</h2></div><p>Des défis collectifs, des respirations, des repas qui s'étirent et tout ce qu'on ne prévoit pas.</p></div><div className="programme-grid">{programmeCards.map((card, index) => <article className={`programme-card programme-card--${index+1}`} key={card.label}><img src={card.image} alt={card.label} loading="lazy" /><p>{`0${index+1}`}</p></article>)}</div></section>
      <section className="invite"><div className="invite__image"><img src={CirclesBonus} alt="Illustration Circles" loading="lazy" /></div><div className="invite__content"><p className="eyebrow">Le bonus</p><h2>Viens avec tes<br /><em>personnes préférées.</em></h2><p>À deux ou à dix, l'aventure est encore plus belle quand elle se raconte à plusieurs.</p><a className="button" href="mailto:nicolas.pichard@gmail.com">Je viens avec ma bande <span aria-hidden="true">↗</span></a></div></section>
      <footer className="footer" id="contact"><img className="footer__shape" src={CirclesTriangle} alt="" aria-hidden="true" /><div className="wrap footer__content"><p className="eyebrow">On se retrouve là-bas ?</p><a className="footer__mail" href="mailto:nicolas.pichard@gmail.com">nicolas.pichard<br />@gmail.com</a><div className="footer__bottom"><span>Circles ⸳ 2026</span><span>DM Instragram pour toute question</span></div></div></footer>
    </main>
  );
}

export default App;