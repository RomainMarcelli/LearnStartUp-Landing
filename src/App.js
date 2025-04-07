import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ajout en haut

function App() {
  // const appStoreUrl = "https://apps.apple.com/"; // à remplacer par ton vrai lien
  // const googlePlayUrl = "https://play.google.com/store/apps"; // à remplacer aussi
  const appStoreUrl = "/"; // à remplacer par ton vrai lien
  const googlePlayUrl = "/"; // à remplacer aussi

  const [formData, setFormData] = useState({ email: '' });
  const [status, setStatus] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="bg-[#2E4E9C] px-8 pt-2 flex justify-between items-center sticky top-0 z-50">
  <div className="text-white text-xl font-semibold flex items-center justify-between w-full md:w-auto">
    <img src="/img/LOGO-SYMBOLE.png" alt="Logo symbole" className="w-[4.5rem] h-[4.5rem] ml-5" />
    
    {/* Burger Icon (visible en mobile) */}
    <button
      className="md:hidden text-white text-3xl focus:outline-none pr-4"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Menu Desktop */}
  <ul className="hidden md:flex space-x-8 items-center text-base">
    <li className="text-white cursor-pointer hover:text-gray-300">Accueil</li>
    <li className="text-white cursor-pointer hover:text-gray-300">Découvrir</li>
    <li className="text-white cursor-pointer hover:text-gray-300">L'Application</li>
    <li>
      <button className="bg-[#F56B1E] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
        Télécharger
      </button>
    </li>
  </ul>

  {/* Menu Mobile */}
  {isMenuOpen && (
    <ul className="absolute top-full left-0 w-full bg-[#2E4E9C] text-white flex flex-col space-y-4 py-6 px-8 md:hidden z-40">
      <li className="cursor-pointer hover:text-gray-300">Accueil</li>
      <li className="cursor-pointer hover:text-gray-300">Découvrir</li>
      <li className="cursor-pointer hover:text-gray-300">L'Application</li>
      <li>
        <button className="bg-[#F56B1E] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-left">
          Télécharger
        </button>
      </li>
    </ul>
  )}
</nav>

{/* SECTION HERO */}
<div
  className="w-full h-screen bg-no-repeat bg-cover text-white relative flex items-center"
  style={{
    backgroundImage: "url('/img/img_back.jpg')",
    backgroundPosition: 'center top', // ajuste à ta guise
  }}
>
  {/* Dégradé */}
  <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#2E4E9C] to-transparent z-0" />

  {/* Contenu */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 transform -translate-y-10 md:-translate-y-16">
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
        HoopSphère : L’APPLI POUR LES PASSIONNÉS DE BASKET !
      </h1>
      <p className="text-base sm:text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit.
      </p>
      <div className="flex flex-wrap gap-4">
        <GooglePlayButton url={googlePlayUrl} theme="dark" width={180} height={60} />
        <AppStoreButton url={appStoreUrl} theme="dark" width={180} height={60} />
      </div>
    </div>
  </div>
</div>
     {/* Section Joueurs / Entraîneurs / Clubs */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-around gap-8">
          {/* Joueurs */}
          <div className="relative w-[320px] h-[400px] rounded-[24.3px] overflow-hidden shadow-lg bg-cover bg-[24%_30%]" style={{ backgroundImage: "url('/img/joueur.jpg')" }}>
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-between p-6 text-white">
              <h3 className="text-2xl text-center font-semibold">Joueurs</h3>
              <p className="text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                dignissim sit
              </p>
            </div>
          </div>

          {/* Entraîneurs */}
          <div className="relative w-[320px] h-[400px] rounded-[24.3px] overflow-hidden shadow-lg bg-cover bg-[22%_30%]" style={{ backgroundImage: "url('/img/coach.jpg')" }}>
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-between p-6 text-white">
              <h3 className="text-2xl text-center font-semibold">Entraîneurs</h3>
              <p className="text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                dignissim sit
              </p>
            </div>
          </div>

          {/* Clubs */}
          <div className="relative w-[320px] h-[400px] rounded-[24.3px] overflow-hidden shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('/img/club.jpg')" }}>
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-between p-6 text-white">
              <h3 className="text-2xl text-center font-semibold">Clubs</h3>
              <p className="text-sm text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                dignissim sit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation App */}
      <section className="bg-white pb-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Qu’est-ce que HoopSphère?</h2>
            <p className="text-gray-800 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet massa condimentum, tempor odio vel, tristique turpis. Quisque blandit libero sit amet justo facilisis, sed porta metus consectetur. Nulla a diam sem. Fusce rutrum ipsum sem, eu aliquet ex elementum ac. Nullam nibh ante, condimentum eget rhoncus id, consequat eu neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <img
              src="/img/iphone.png"
              alt="Phone 1"
              className="w-[33rem] animate-float"
            />
          </div>

        </div>
      </section>

      {/* Section Téléchargement CTA */}
      <section
        className="relative text-white h-[717px]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/img/panier.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#151414B2]"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Téléchargez votre application HoopSphère</h2>
          <p className="text-lg mb-8 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet massa condimentum, tempor odio vel, tristique turpis.
          </p>
          <button className="bg-[#F56B1E] text-white px-8 py-3 text-lg rounded-xl hover:bg-orange-600 transition-colors">
            Télécharger
          </button>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#2E4E9C] to-[#1A1A2E] py-20 text-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
          <p className="mb-6 text-lg">
            Recevez les dernières actualités, événements et nouveautés de HoopSphère directement dans votre boîte mail.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              className="px-4 py-3 rounded-md w-full md:w-80 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#F56B1E] px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              S'abonner
            </button>
          </form>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
      </section>
      <footer className="bg-[#151415] text-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-center items-center">

    {/* Logo centré */}
    <div className="flex justify-center">
      <img src="/img/LOGO-V.png" alt="HoopSphère Logo" className="w-24 sm:w-32 object-contain" />
    </div>

    {/* Liens au centre */}
    <ul className="w-full flex flex-col sm:flex-row sm:justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/90 text-center">
      <li className="hover:text-white cursor-pointer w-full sm:w-auto whitespace-nowrap">Mentions Légales</li>
      <li className="hover:text-white cursor-pointer w-full sm:w-auto whitespace-nowrap">Conditions d’utilisation</li>
      <li className="hover:text-white cursor-pointer w-full sm:w-auto whitespace-nowrap">Politique de confidentialité</li>
    </ul>

    {/* Réseaux centré */}
    <div className="flex justify-center space-x-4">
      <a href="#" aria-label="Facebook" className="hover:text-gray-300 text-2xl">
        <FaFacebookF />
      </a>
      <a href="#" aria-label="Instagram" className="hover:text-gray-300 text-2xl">
        <FaInstagram />
      </a>
      <a href="#" aria-label="Twitter" className="hover:text-gray-300 text-2xl">
        <FaTwitter />
      </a>
    </div>
  </div>

  {/* Copyright */}
  <div className="bg-[#151415] text-center py-4 text-sm text-white/80">
    © {new Date().getFullYear()} HoopSphère — Tous droits réservés.
  </div>
</footer>

    </div>
  );
}

export default App;
