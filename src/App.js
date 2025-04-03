import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
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
        className="flex-1 bg-cover bg-center text-white px-8 py-16"
        style={{ backgroundImage: "url('/img/img_back.jpg')" }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            HoopSphère : L’APPLI POUR LES PASSIONNÉS DE BASKET !
          </h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
            dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
            massa, varius a, semper congue, euismod non, mi.
          </p>
          <div className="flex space-x-4">
            <img src="/img/google-play-badge.png" alt="Google Play" className="h-12" />
            <img src="/img/app-store-badge.png" alt="App Store" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
