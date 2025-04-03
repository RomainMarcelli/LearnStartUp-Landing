import React from 'react';
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";

function App() {
  const appStoreUrl = "https://apps.apple.com/"; // à remplacer par ton vrai lien
  const googlePlayUrl = "https://play.google.com/store/apps"; // à remplacer aussi

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-[#2E4E9C] px-8 py-4 flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Logo</div>
        <ul className="flex space-x-8 items-center">
          <li className="text-white cursor-pointer hover:text-gray-300">Accueil</li>
          <li className="text-white cursor-pointer hover:text-gray-300">Découvrir</li>
          <li className="text-white cursor-pointer hover:text-gray-300">L'Application</li>
          <li>
            <button className="bg-[#F56B1E] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Télécharger
            </button>
          </li>
        </ul>
      </nav>
      <div
        className="flex-1 bg-cover bg-center text-white relative"
        style={{ backgroundImage: "url('/img/img_back.jpg')" }}
      >
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#2E4E9C]/80 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              HoopSphère : L’APPLI POUR LES PASSIONNÉS DE BASKET !
            </h1>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
              dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
              massa, varius a, semper congue, euismod non, mi.
            </p>
            <div className="flex space-x-4">
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
      {/* Section Présentation App */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Qu’est-ce que HoopSphère?</h2>
            <p className="text-gray-800 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet massa condimentum, tempor odio vel,
              tristique turpis. Quisque blandit libero sit amet justo facilisis, sed porta metus consectetur. Nulla a diam
              sem. Fusce rutrum ipsum sem, eu aliquet ex elementum ac. Nullam nibh ante, condimentum eget rhoncus id,
              consequat eu neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </p>
          </div>
          <div className="flex justify-center gap-6">
          <img src="/img/iphone.png" alt="Phone 1" className="w-[33rem]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
