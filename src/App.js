import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ajout en haut

function App() {
  // const appStoreUrl = "https://apps.apple.com/"; // à remplacer par ton vrai lien
  // const googlePlayUrl = "https://play.google.com/store/apps"; // à remplacer aussi
  const appStoreUrl = "/"; // à remplacer par ton vrai lien
  const googlePlayUrl = "/"; // à remplacer aussi

  const [formData, setFormData] = useState({ email: '' });
  const [status, setStatus] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_l763e7g',
        'template_gqw8am9',
        formData,
        'Iw-kl6b1kOYSMatcX'
      )
      .then(
        () => setStatus('Merci pour votre inscription !'),
        () => setStatus("Une erreur s'est produite. Réessayez.")
      );

    setFormData({ email: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-[#202020] px-14 pt-4 pb-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-white text-xl font-semibold flex items-center justify-between w-full md:w-auto">
          <img src="/img/LOGO-H.png" alt="Logo symbole" className="w-[13.5rem] h-[6.5rem] ml-14" />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 items-center text-base mr-14">
          <li>
            <div
              className={`p-[2px] rounded-full inline-block transition-all duration-300 ${hovered
                ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400'
                : 'bg-gradient-to-r from-gray-400 via-[#7885f2] to-sky-400'
                }`}
            >
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`relative w-[320px] h-[68px] text-xl rounded-full text-white font-bold overflow-hidden flex items-center justify-center transition-colors duration-300 ${hovered ? 'bg-[#F56B1E]' : 'bg-[#1b1b1b]'
                  }`}
              >
                <span
                  className={`absolute transition-all duration-500 ${hovered ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                    }`}
                >
                  Commencer HoopSphère
                </span>
                <span
                  className={`absolute transition-all duration-500 ${hovered ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
                    }`}
                >
                  Télécharger l'application
                </span>
              </button>
            </div>
          </li>
        </ul>
      </nav>

      {/* SECTION HERO */}
      <div
        className="img_back w-full h-screen bg-no-repeat bg-cover text-white relative flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/img/img_back-min.jpg')",
          backgroundPosition: 'center top',
        }}
      >
        {/* Dégradé 1 (bleu) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E4E9C] to-transparent opacity-80 z-0" />
        {/* Dégradé 2 (orange) */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#F56B1E] to-transparent opacity-80 z-0" />

        {/* Contenu */}
        <div className="relative z-10 px-6 sm:px-8 md:px-12 max-w-6xl xl:ml-[150px] flex flex-col gap-10">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 flex flex-col gap-4">
              <span>Réseau, progression, succès !</span>
              <span>Tout commence avec</span>
              <span>HoopSphère !</span>
            </h1>
            <div className="text-2xl sm:text-3xl mb-10 flex flex-col gap-8">
              <p className="leading-relaxed">
                Que tu sois joueur, coach ou club, notre application te connecte aux meilleurs talents et opportunités.
                Trouve des équipes, repère des recrues, participe à des événements exclusifs et fais passer ton jeu au niveau supérieur.
              </p>
              <p className="leading-relaxed">
                Télécharge HoopSphère dès maintenant !<br />
                Le monde du basketball t’attend !
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <GooglePlayButton url={googlePlayUrl} theme="dark" width={200} height={70} />
              <AppStoreButton url={appStoreUrl} theme="dark" width={200} height={70} />
            </div>
          </div>
        </div>
      </div>


      {/* Section Joueurs / Entraîneurs / Clubs */}
      <section className="bg-white py-20">
        <div className="px-8 flex flex-wrap justify-evenly gap-12">
          <div className="group relative w-[420px] h-[550px] rounded-[24.3px] overflow-hidden shadow-lg">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-[24%_30%] transition-transform duration-500 scale-100 group-hover:scale-110"
              style={{ backgroundImage: "url('/img/joueur.jpg')" }}
            />

            {/* Gray overlay */}
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

            {/* Persistent title */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 z-40 pointer-events-none transition-all duration-500 top-1/2 group-hover:top-5"
            >
              <h3 className="text-3xl font-semibold text-white text-center whitespace-nowrap transition-all duration-500 group-hover:mt-4">
                T'es un joueur
              </h3>
            </div>
            {/* Hover content */}
            <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-6 text-white text-center transition-all duration-500 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 z-30">
              <div className="mt-[7.2rem]">
                <p className="text-xl font-light leading-relaxed">
                  HoopSphere booste chaque joueur en offrant un suivi personnalisé de ses statistiques, tout en connectant coaches et clubs pour une progression continue.
                  <br />
                  Chaque joueur peut ainsi se dépasser et viser de nouveaux horizons, que ce soit pour ses objectifs personnels ou pour jouer au plus haut niveau.
                </p>
              </div>

              <button
                className=" mt-2 mb-4 mx-auto w-[300px] h-[70px] text-xl rounded-full text-white font-semibold border-2 border-white hover:bg-white hover:text-black transition duration-300"
              >
                Créer son compte joueur
              </button>
            </div>
          </div>

          {/* CLUB */}
          <div className="group relative w-[420px] h-[550px] rounded-[24.3px] overflow-hidden shadow-lg">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
              style={{ backgroundImage: "url('/img/club.jpg')" }}
            />

            {/* Gray overlay */}
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

            {/* Persistent title */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 z-40 pointer-events-none transition-all duration-500 top-1/2 group-hover:top-5"
            >
              <h3 className="text-3xl font-semibold text-white text-center whitespace-nowrap transition-all duration-500 group-hover:mt-4">
                T'es un club
              </h3>
            </div>

            {/* Hover content */}
            <div className="absolute inset-0 flex flex-col justify-between px-6 py-6 text-white text-center transition-all duration-500 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 z-30">
              <div className="mt-[7.2rem]">
                <p className="text-xl font-light leading-relaxed">
                  HoopSphere permet aux clubs de recruter plus facilement en accédant à un réseau de joueurs et de coachs qualifiés.
                  <br />
                  Grâce à des profils détaillés et des statistiques précises, chaque club peut renforcer ses équipes efficacement.
                </p>
              </div>

              <button
                className=" mt-2 mb-4 mx-auto w-[300px] h-[70px] text-xl rounded-full text-white font-semibold border-2 border-white hover:bg-white hover:text-black transition duration-300"
              >
                Créer son compte club
              </button>
            </div>
          </div>

          {/* Entraîneurs */}
          <div className="relative w-[420px] h-[550px] rounded-[24.3px] overflow-hidden shadow-lg bg-cover bg-[22%_30%]" style={{ backgroundImage: "url('/img/coach.jpg')" }}>
            {/* Overlay plus sombre */}
            <div className="absolute inset-0 bg-black/70 z-10 flex flex-col justify-between p-6 text-white">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 z-40 pointer-events-none transition-all duration-500 top-1/2 group-hover:top-5"
              >
                <h3 className="text-3xl font-semibold text-white text-center whitespace-nowrap">
                  T'es un entraîneur
                </h3>
                <p className='text-center text-s'>(Bientôt disponible)</p>
              </div>
              {/* <p className="text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                dignissim sit
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation App */}
      <section className="bg-gradient-to-r from-[#2542A5] via-[#2E4E9C] to-[#F56B1E] py-24 relative overflow-hidden">
        <div className="relative z-10 mx-4 sm:mx-8 md:mx-10 px-4 sm:px-8 md:px-12 grid grid-cols-1 custom:grid-cols-2 gap-16 items-center text-white">
          {/* Bloc Texte */}
          <div className="order-1 space-y-10 text-center lg:text-left 2xl:ml-[200px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              La plateforme qui connecte <br /> et propulse le basket !
            </h2>
            <p className="text-lg sm:text-xl font-bold">
              Que vous soyez joueur, coach ou club, HoopSphere révolutionne votre façon d’évoluer dans le monde du basket.
            </p>
            <p className="text-base sm:text-lg">
              Suivi des performances, mises en relation stratégiques et opportunités de recrutement : tout est réuni pour vous aider à atteindre vos objectifs.
            </p>
            <p className="text-lg sm:text-xl font-bold">
              Rejoignez une communauté dynamique et donnez un nouvel élan à votre parcours !
            </p>

            <ul className="list-decimal list-inside space-y-4 text-base sm:text-lg text-left lg:text-left">
              <li>Créez votre profil – Joueur, coach ou club, présentez votre parcours et vos objectifs.</li>
              <li>Suivez vos performances – Accédez à des statistiques détaillées pour analyser et améliorer votre jeu.</li>
              <li>Élargissez votre réseau – Connectez-vous avec des coaches, joueurs et clubs pour saisir de nouvelles opportunités.</li>
              <li>Trouvez la bonne opportunité – Rejoignez une équipe, recrutez des talents ou attirez les bonnes personnes.</li>
              <li>Progressez et atteignez vos objectifs – Avec HoopSphere, repoussez vos limites et donnez un nouvel élan à votre carrière basket !</li>
            </ul>
          </div>

          {/* Bloc Téléphone */}
          <div className="order-2 flex justify-center lg:justify-center">
            <img
              src="/img/iphone-rd.png"
              alt="Phone"
              className="w-[300px] sm:w-[400px] md:w-[550px] min-w-0 mr-0 2xl:mr-20 animate-float pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Section Téléchargement CTA */}
      <section className="relative text-white h-[510px] sm:h-[410px]">
      <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/img/panier.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#151414B2]"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-9">Téléchargez votre application HoopSphère</h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl">
            Accédez à toutes les fonctionnalités de HoopSphère où que vous soyez Suivez vos performances, échangez avec la communauté et ne manquez aucune opportunité basket.
          </p>
          <button className="bg-[#F56B1E] text-2xl w-[200px] h-[60px] text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Télécharger
          </button>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#2E4E9C] to-[#1A1A2E] py-14 text-white">
        <div className="mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
          <p className="my-10 text-2xl max-w-4xl mx-auto">
            Recevez les dernières actualités, événements et nouveautés de HoopSphère directement dans votre boîte mail.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-0">
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              className="px-5 py-5 rounded-l-md text-xl md:w-[400px] text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#F56B1E] px-6 py-5 text-xl rounded-r-md hover:bg-orange-600 transition-colors"
            >
              S'abonner
            </button>
          </form>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
      </section>
      <footer className="bg-[#151415] text-white">
        <div className="mx-auto px-8 flex flex-col md:flex-row flex-wrap justify-around items-center md:items-center text-center md:text-left py-10 gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/img/LOGO-H.png" alt="HoopSphère Logo" className="w-[20rem] object-contain" />
          </div>

          {/* Liens */}
          <div>
            <ul className="flex flex-col sm:flex-row justify-center flex-wrap md:justify-center items-center text-xl text-white uppercase space-y-2 sm:space-y-0 sm:space-x-4 text-center">
              <li className="flex items-center">
                <span className="hover:text-white cursor-pointer whitespace-nowrap">Mentions légales</span>
              </li>
              <span className="hidden sm:inline">-</span>
              <li className="flex items-center">
                <span className="hover:text-white cursor-pointer whitespace-nowrap">Politique de confidentialité des données</span>
              </li>
              <span className="hidden sm:inline">-</span>
              <li className="flex items-center">
                <span className="hover:text-white cursor-pointer whitespace-nowrap">Gestion cookies</span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F56B1E] hover:bg-orange-500">
              <FaLinkedin className="text-black text-4xl" />
            </a>
            <a href="#" className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F56B1E] hover:bg-orange-500">
              <FaFacebookF className="text-black text-4xl" />
            </a>
            <a href="#" className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F56B1E] hover:bg-orange-500">
              <FaInstagram className="text-black text-4xl" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-s gap-4 py-4 text-white/80">
          <span>COPYRIGHT © {new Date().getFullYear()} HoopSphère</span>
          <span className="hidden sm:inline">|</span>
          <span>TOUS DROITS RÉSERVÉS</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
