import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

function SiteFooter() {
  return (
    <footer className="bg-[#151415] text-white">
      <div className="mx-auto px-8 flex flex-col md:flex-row flex-wrap justify-around items-center md:items-center text-center md:text-left py-10 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/img/LOGO-H.png"
            alt="HoopSphere Logo"
            className="w-[20rem] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <ul className="flex flex-col sm:flex-row justify-center flex-wrap md:justify-center items-center text-m xs:text-xl text-white uppercase space-y-2 sm:space-y-0 sm:space-x-4 text-center">
            <li className="flex items-center">
              <a
                href="/mentions-legales"
                className="hover:text-white cursor-pointer whitespace-nowrap"
              >
                Mentions légales
              </a>
            </li>
            <span className="hidden sm:inline">-</span>
            <li className="flex items-center">
              <a
                href="/politique-confidentialite"
                className="hover:text-white cursor-pointer whitespace-nowrap"
              >
                Politique de confidentialité
                <wbr /> des données
              </a>
            </li>
            <span className="hidden sm:inline">-</span>
            <li className="flex items-center">
              <a
                href="/gestion-cookies"
                className="hover:text-white cursor-pointer whitespace-nowrap"
              >
                Gestion cookies
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end space-x-6">
          <a
            href="https://www.linkedin.com/company/hoopsphere/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers LinkedIn"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F56B1E] hover:bg-orange-500"
          >
            <FaLinkedin className="text-black text-4xl" />
          </a>
          <button
            type="button"
            aria-label="Page Facebook bientôt disponible"
            title="Page Facebook bientôt disponible"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F56B1E] hover:bg-orange-500"
          >
            <FaFacebookF className="text-black text-4xl" />
          </button>
          <a
            href="https://www.instagram.com/hoopsphere_fr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers Instagram"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F56B1E] hover:bg-orange-500"
          >
            <FaInstagram className="text-black text-4xl" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center text-s gap-4 py-4 text-white/80">
        <span>COPYRIGHT © {new Date().getFullYear()} HoopSphere</span>
        <span className="hidden sm:inline">|</span>
        <span>TOUS DROITS RÉSERVÉS</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
