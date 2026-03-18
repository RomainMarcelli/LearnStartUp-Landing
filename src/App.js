import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Modal from "./components/Modal";

const EMAILJS_SERVICE_ID = "service_ah99b6s";
const EMAILJS_NEWSLETTER_TEMPLATE_ID = "template_qol73hn";
const EMAILJS_BETA_TEMPLATE_ID = "template_qol73hn";
const EMAILJS_PUBLIC_KEY = "-3UT8cRVJ9ChBJXSM";
const BETA_RECIPIENT_EMAIL = "hoopsphere.fr@gmail.com";

const faqItems = [
  {
    q: "HoopSphere est-elle gratuite ?",
    a: "HoopSphere fonctionne avec un modèle freemium. Les fonctionnalités essentielles sont accessibles gratuitement, et une version Premium ajoute des options avancées de visibilité et d'analyse.",
  },
  {
    q: "Sur quelles plateformes l'application est-elle disponible ?",
    a: "HoopSphere est disponible sur Android en accès bêta. La version iOS arrive prochainement. Les deux versions sont conçues pour offrir la même expérience cross-platform.",
  },
  {
    q: "Comment fonctionne l'inscription sur HoopSphere ?",
    a: "À l'inscription, vous choisissez votre rôle (joueur ou club). L'interface s'adapte ensuite à votre usage: profil sportif détaillé, publication d'offres, candidatures et suivi des performances.",
  },
  {
    q: "Peut-on importer des statistiques de match ?",
    a: "Oui. Les joueurs peuvent importer un PDF e-Marque pour intégrer automatiquement leurs statistiques officielles de match sur leur profil.",
  },
  {
    q: "Les clubs peuvent-ils recruter directement sur l'application ?",
    a: "Oui. Les clubs publient des offres de recrutement, reçoivent les candidatures des joueurs et contactent les profils directement via la messagerie intégrée.",
  },
  {
    q: "Quelles fonctionnalités de visibilité sont proposées ?",
    a: "Les joueurs peuvent publier des vidéos (highlights), obtenir des vues, likes et favoris, et gagner en visibilité via le classement. La version Premium renforce cette mise en avant.",
  },
];

function App() {
  const [formData, setFormData] = useState({ email: "" });
  const [status, setStatus] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isBetaSubmitting, setIsBetaSubmitting] = useState(false);
  const [betaStatus, setBetaStatus] = useState(null);
  const [betaFormData, setBetaFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const scrollToCurrentHash = (behavior = "auto") => {
      const hash = window.location.hash;
      if (!hash) {
        return;
      }

      const targetId = hash.replace("#", "");
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      const stickyNav = document.querySelector("nav");
      const navOffset = stickyNav?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 12;

      window.scrollTo({ top, behavior });
    };

    let attempts = 0;
    const maxAttempts = 12;
    const interval = setInterval(() => {
      attempts += 1;
      scrollToCurrentHash("auto");
      if (!window.location.hash || document.getElementById(window.location.hash.slice(1)) || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 120);

    const handleHashChange = () => {
      scrollToCurrentHash("smooth");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NEWSLETTER_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => setStatus("Merci pour votre inscription !"),
        () => setStatus("Une erreur s'est produite. Réessayez.")
      );

    setFormData({ email: "" });
  };

  const openDownloadModal = () => {
    setBetaStatus(null);
    setBetaFormData({ firstName: "", lastName: "", email: "" });
    setIsDownloadModalOpen(true);
  };

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };

  const handleBetaSubmit = (event) => {
    event.preventDefault();
    if (isBetaSubmitting) {
      return;
    }

    const firstName = betaFormData.firstName.trim();
    const lastName = betaFormData.lastName.trim();
    const email = betaFormData.email.trim();

    if (!firstName || !lastName || !email) {
      setBetaStatus({
        type: "error",
        message: "Merci de compléter les trois champs du formulaire.",
      });
      return;
    }

    const betaRequestMessage = [
      "Nouvelle demande d'inscription beta HoopSphere",
      `Prénom: ${firstName}`,
      `Nom: ${lastName}`,
      `Email: ${email}`,
    ].join("\n");

    const betaTemplateParams = {
      email,
      first_name: firstName,
      last_name: lastName,
      to_email: BETA_RECIPIENT_EMAIL,
      recipient_email: BETA_RECIPIENT_EMAIL,
      reply_to: email,
      request_type: "beta_tester",
      source: "landing_download_modal",
      message: betaRequestMessage,
    };

    setIsBetaSubmitting(true);
    setBetaStatus(null);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_BETA_TEMPLATE_ID,
        betaTemplateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setBetaStatus({
          type: "success",
          message:
            "Merci ! Votre demande a bien été envoyée. Nous vous recontacterons rapidement.",
        });
        setBetaFormData({ firstName: "", lastName: "", email: "" });
      })
      .catch(() => {
        setBetaStatus({
          type: "error",
          message:
            "L'envoi a échoué. Merci de réessayer dans quelques instants.",
        });
      })
      .finally(() => {
        setIsBetaSubmitting(false);
      });
  };

  function ResponsiveStoreButtons({ onOpenDownloadModal }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 500);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const size = isMobile ? "w-[150px]" : "w-[200px]";

    return (
      <div className="flex justify-center md:justify-start items-center gap-6 w-full mt-4">
        <button
          type="button"
          onClick={onOpenDownloadModal}
          aria-label="Ouvrir le formulaire beta Android"
          className="transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F56B1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#202020]"
        >
          <img
            src="/img/btnGooglePlay.png"
            className={`${size} h-auto`}
            alt="Google Play"
            decoding="async"
          />
        </button>

        <button
          type="button"
          onClick={onOpenDownloadModal}
          aria-label="Voir la disponibilité iOS"
          className="transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F56B1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#202020]"
        >
          <img
            src="/img/btnAppStore.png"
            className={`${size} h-auto`}
            alt="App Store"
            decoding="async"
          />
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-[#202020] px-3 sm:px-5 lg:px-10 py-2 sm:py-2.5 flex justify-between items-center sticky top-0 z-50">
        <div className="text-white text-xl font-semibold flex items-center w-full md:w-auto">
          <img
            src="/img/LOGO-H.png"
            alt="Logo hoopsphere symbole"
            className="w-[6.8rem] sm:w-[7.8rem] md:w-[9rem] lg:w-[9.8rem] h-auto ml-1"
            decoding="async"
          />
        </div>

        <ul className="flex items-center justify-end text-base mr-1 sm:mr-2">
          <li>
            <div
              className={`p-[2px] rounded-full inline-block transition-all duration-300 ${
                hovered
                  ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"
                  : "bg-gradient-to-r from-gray-400 via-[#7885f2] to-sky-400"
              }`}
            >
              <button
                aria-label="Télécharger l'application HoopSphere"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={openDownloadModal}
                className={`relative w-[128px] xs400:w-[160px] sm:w-[190px] md:w-[220px] lg:w-[255px] h-[40px] sm:h-[44px] md:h-[50px] lg:h-[56px] px-4 md:px-5 text-xs sm:text-sm md:text-base rounded-full text-white font-bold overflow-hidden flex items-center justify-center transition-colors duration-300 ${
                  hovered ? "bg-[#F56B1E]" : "bg-[#1b1b1b]"
                }`}
              >
                {/* Mobile version (sans animation) */}
                <span className="md:hidden">Télécharger</span>

                {/* Desktop animation */}
                <span
                  className={`absolute hidden md:block transition-all duration-500 ${
                    hovered
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  Commencer HoopSphere
                </span>
                <span
                  className={`absolute hidden md:block transition-all duration-500 ${
                    hovered
                      ? "translate-y-10 opacity-0"
                      : "translate-y-0 opacity-100"
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
        className="img_back w-full h-[calc(100svh-52px)] sm:h-[calc(100svh-56px)] lg:h-[calc(100svh-60px)] bg-no-repeat bg-cover text-white relative flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/img/img_back-min.jpg')",
          backgroundPosition: "center top",
        }}
      >
        {/* Dégradé 1 (bleu) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E4E9C] to-transparent opacity-80 z-0" />
        {/* Dégradé 2 (orange) */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#F56B1E] to-transparent opacity-80 z-0" />

        {/* Contenu */}
        <div className="relative z-10 px-3 xs400:px-6 sm:px-8 md:px-10 lg:px-14 max-w-6xl xl:ml-[100px] flex flex-col gap-8 md:gap-10 text-center xs:text-left">
          <div>
            <h2 className="text-[clamp(1.7rem,4.2vw,3.8rem)] font-extrabold mb-5 sm:mb-6 flex flex-col gap-2 leading-[1.08]">
              <span>Réseau, progression, succès !</span>
              <span>Tout commence avec</span>
              <span>HoopSphere !</span>
            </h2>
            <div className="text-base xs400:text-lg sm:text-xl lg:text-[1.45rem] mb-8 sm:mb-9 flex flex-col gap-4 sm:gap-6">
              <p className="leading-relaxed">
                HoopSphere digitalise le recrutement basket en connectant
                joueurs, clubs et entraîneurs sur une seule plateforme. Créez
                un profil structuré, publiez des offres, candidatez rapidement
                et échangez directement via la messagerie intégrée.
              </p>
              <p className="leading-relaxed">
                Importez vos statistiques officielles via PDF e-Marque, mettez
                en avant vos performances vidéo et gagnez en visibilité grâce au
                classement HoopSphere.
              </p>
            </div>
            <ResponsiveStoreButtons
              onOpenDownloadModal={openDownloadModal}
            />
          </div>
        </div>
      </div>

      {/* Section Joueurs / Entraîneurs / Clubs */}
      <section className="bg-white py-20">
        <div className="container flex flex-wrap justify-center gap-y-16 gap-x-[3.5rem]">
          {/* Carte Joueur */}
          <div className="w-full sm:w-[48%] xl:w-[30%] flex justify-center">
            <div className="group w-full max-w-[420px] h-[550px] rounded-[24.3px] overflow-hidden shadow-lg relative">
              <div
                className="absolute inset-0 bg-cover bg-[24%_30%] transition-transform duration-500 scale-100 group-hover:scale-110"
                style={{ backgroundImage: "url('/img/joueur.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 z-40 top-1/2 group-hover:top-5 transition-all duration-500">
                <h3 className="text-3xl font-semibold text-white text-center whitespace-nowrap group-hover:mt-4">
                  T'es un joueur
                </h3>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-6 text-white text-center transition-all duration-500 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 z-30">
                <div className="mt-[7.2rem]">
                  <p className="text-xl font-light leading-relaxed">
                    Crée ton profil complet, importe tes stats officielles
                    e-Marque, publie tes highlights vidéo et candidate aux
                    offres des clubs dans un seul espace.
                    <br />
                    <br />
                    HoopSphere t'aide à gagner en visibilité et à transformer
                    tes performances en opportunités concrètes.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openDownloadModal}
                  className="mt-2 mb-4 mx-auto w-[300px] h-[70px] text-xl rounded-full text-white font-semibold border-2 border-white hover:bg-white hover:text-black transition duration-300"
                >
                  Créer son compte joueur
                </button>
              </div>
            </div>
          </div>

          {/* Carte Club */}
          <div className="w-full sm:w-[48%] xl:w-[30%] flex justify-center">
            <div className="group w-full max-w-[420px] h-[550px] rounded-[24.3px] overflow-hidden shadow-lg relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
                style={{ backgroundImage: "url('/img/club.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 z-40 top-1/2 group-hover:top-5 transition-all duration-500">
                <h3 className="text-3xl font-semibold text-white text-center whitespace-nowrap group-hover:mt-4">
                  T'es un club
                </h3>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-6 text-white text-center transition-all duration-500 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 z-30">
                <div className="mt-[7.2rem]">
                  <p className="text-xl font-light leading-relaxed">
                    Publiez vos offres de recrutement, consultez des profils
                    structurés et suivez les candidatures des joueurs en temps
                    réel.
                    <br />
                    <br />
                    Avec HoopSphere, votre scouting devient plus rapide, plus
                    fiable et mieux organisé.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openDownloadModal}
                  className="mt-2 mb-4 mx-auto w-[300px] h-[70px] text-xl rounded-full text-white font-semibold border-2 border-white hover:bg-white hover:text-black transition duration-300"
                >
                  Créer son compte club
                </button>
              </div>
            </div>
          </div>

          {/* Carte Entraîneur */}
          <div className="w-full sm:w-[48%] xl:w-[30%] flex justify-center">
            <div
              className="group w-full max-w-[420px] h-[550px] rounded-[24.3px] overflow-hidden shadow-lg relative bg-cover bg-[22%_30%]"
              style={{ backgroundImage: "url('/img/coach.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/70 z-10 flex flex-col justify-between p-6 text-white">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-40 top-1/2">
                  <h3 className="text-3xl font-semibold text-white text-center whitespace-nowrap">
                    T'es un entraîneur
                  </h3>
                  <p className="text-center text-sm mt-2">
                    (Bientôt disponible)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation App */}
      <section className="bg-gradient-to-r from-[#2542A5] via-[#2E4E9C] to-[#F56B1E] py-14 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center text-white">
          {/* Bloc Texte */}
          <div className="order-1 lg:order-1 space-y-6 text-left">
            <h2 className="text-[clamp(1.7rem,4vw,3.2rem)] font-bold leading-tight">
              La plateforme qui connecte <br /> et propulse le basket !
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-bold">
              HoopSphere modernise le recrutement basket avec une approche
              digitale, structurée et orientée performance.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Profils détaillés, statistiques officielles, offres de clubs,
              candidatures simplifiées et messagerie sécurisée : tout est réuni
              pour accélérer la mise en relation entre talents et recruteurs.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-bold">
              Version gratuite pour démarrer, options Premium pour booster votre
              visibilité et affiner votre analyse.
            </p>

            <ul className="list-decimal list-inside space-y-3 text-sm sm:text-base lg:text-lg">
              <li>
                Créez votre profil - Joueur ou club, structurez vos informations
                clés et vos objectifs.
              </li>
              <li>
                Importez vos stats officielles - Analyse automatique via PDF
                e-Marque pour un suivi fiable.
              </li>
              <li>
                Publiez ou consultez des offres - Les clubs recrutent, les
                joueurs candidatent en quelques clics.
              </li>
              <li>
                Gagnez en visibilité - Feed vidéo, likes, vues, favoris et
                classement des profils.
              </li>
              <li>
                Échangez rapidement - Messagerie interne pour des prises de
                contact professionnelles.
              </li>
            </ul>
          </div>

          {/* Bloc Téléphone */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end mt-5">
            <img
              src="/img/iphonenew.png"
              alt="Aperçu de l'application HoopSphere sur smartphone"
              className="w-[230px] sm:w-[300px] md:w-[360px] lg:w-[430px] min-w-0 animate-float pointer-events-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#121827] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="rounded-2xl border border-white/10 bg-[#182236] p-5 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <span className="inline-flex items-center rounded-full bg-[#F56B1E]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#F56B1E]">
              Suivi & recrutement
            </span>

            <h1 className="mt-4 text-[clamp(1.7rem,4.4vw,2.9rem)] font-extrabold leading-tight">
              Application de suivi de basket
            </h1>

            <p className="mt-4 max-w-4xl text-base sm:text-lg leading-relaxed text-white/85">
              HoopSphere est une application de suivi de basket dédiée aux
              joueurs, coachs et clubs. Elle centralise les profils, les
              statistiques et les opportunités de recrutement pour structurer la
              mise en relation sportive.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-[#314D8F]/50 bg-[#1d2c4a] p-5 transition-transform duration-300 hover:-translate-y-1">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Une application de statistiques basket complète
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80">
                  Grâce à l'import PDF e-Marque, les joueurs ajoutent
                  automatiquement leurs statistiques officielles de match.
                  Points, passes, rebonds et efficacité sont mis à jour
                  rapidement pour faciliter l'analyse de performance.
                </p>
              </article>

              <article className="rounded-xl border border-[#F56B1E]/40 bg-[#2b2220] p-5 transition-transform duration-300 hover:-translate-y-1">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Pourquoi utiliser HoopSphere ?
                </h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm sm:text-base text-white/85">
                  <li>Profils joueurs et clubs détaillés</li>
                  <li>Import automatique des statistiques e-Marque</li>
                  <li>Publication d'offres et candidatures en quelques clics</li>
                  <li>Feed vidéo, classement et messagerie professionnelle</li>
                </ul>
              </article>
            </div>

            <p className="mt-5 text-sm sm:text-base text-white/80">
              Pour aller plus loin, consultez aussi notre page dédiée{" "}
              <a
                href="/application-suivi-basket"
                className="font-semibold text-[#F56B1E] underline underline-offset-4 hover:text-[#ff8a47]"
              >
                application suivi basket
              </a>
              .
            </p>
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
          <h2 className="text-4xl sm:text-5xl font-semibold mb-9">
            Téléchargez votre application HoopSphere
          </h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl">
            Rejoignez la plateforme qui centralise profils, statistiques,
            recrutements et candidatures basket. Passez d'un réseau informel à
            un outil pro pensé pour la performance et la visibilité.
          </p>
          <button
            type="button"
            onClick={openDownloadModal}
            className="bg-[#F56B1E] text-2xl w-[200px] h-[60px] text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors"
          >
            Télécharger
          </button>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#2E4E9C] to-[#1A1A2E] py-14 text-white">
        <div className="mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Abonnez-vous à notre newsletter
          </h2>
          <p className="my-10 text-xl sm:text-2xl max-w-4xl mx-auto">
            Recevez les dernières actualités, événements et nouveautés de
            HoopSphere directement dans votre boîte mail.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row items-center justify-center gap-0"
          >
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              className="px-4 py-4 text-base xs400:px-5 xs400:py-5 xs400:text-xl rounded-l-md w-[180px] xs400:w-[250px] md:w-[400px] text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#F56B1E] px-4 py-4 text-base xs400:px-6 xs400:py-5 xs400:text-xl rounded-r-md hover:bg-orange-600 transition-colors"
            >
              S'abonner
            </button>
          </form>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>
      </section>

      {/* Section FAQ */}
      <section
        id="faq"
        className="relative overflow-hidden bg-[#151415] py-20 text-white scroll-mt-28"
      >
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#2E4E9C]/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#F56B1E]/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#F56B1E]/50 bg-[#F56B1E]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#F56B1E]">
              FAQ
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Questions fréquentes
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70 sm:text-xl">
              Toutes les réponses essentielles pour démarrer sur HoopSphere en
              toute confiance.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <article
                  key={item.q}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#F56B1E]/60 bg-gradient-to-r from-[#222324] to-[#1a1b1d] shadow-[0_20px_45px_rgba(245,107,30,0.18)]"
                      : "border-white/10 bg-[#1f2022]/85 hover:border-[#F56B1E]/30 hover:bg-[#232427]"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : index)
                    }
                  >
                    <span className="text-base font-semibold leading-relaxed sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#F56B1E] text-black"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <FaChevronDown
                        className={`text-sm transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] px-6 pb-6 opacity-100"
                        : "grid-rows-[0fr] px-6 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/80 sm:text-lg">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isDownloadModalOpen}
        onClose={closeDownloadModal}
        title="Télécharger HoopSphere"
        maxWidthClassName="max-w-5xl"
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-2xl border border-[#F56B1E]/30 bg-white/[0.03] p-5 sm:p-6">
            <h4 className="text-xl font-bold text-[#F56B1E]">
              Android - Accès bêta
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              L'application Android est en phase de beta testing. Remplissez ce
              formulaire pour demander un accès anticipé.
            </p>

            <form onSubmit={handleBetaSubmit} className="mt-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-white/85">
                  Prénom
                  <input
                    type="text"
                    required
                    autoComplete="given-name"
                    value={betaFormData.firstName}
                    onChange={(event) =>
                      setBetaFormData((previous) => ({
                        ...previous,
                        firstName: event.target.value,
                      }))
                    }
                    className="h-11 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-[#F56B1E]/70 focus:bg-white/[0.08]"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-white/85">
                  Nom
                  <input
                    type="text"
                    required
                    autoComplete="family-name"
                    value={betaFormData.lastName}
                    onChange={(event) =>
                      setBetaFormData((previous) => ({
                        ...previous,
                        lastName: event.target.value,
                      }))
                    }
                    className="h-11 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-[#F56B1E]/70 focus:bg-white/[0.08]"
                  />
                </label>
              </div>

              <label className="mt-3 flex flex-col gap-2 text-sm font-medium text-white/85">
                Email
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={betaFormData.email}
                  onChange={(event) =>
                    setBetaFormData((previous) => ({
                      ...previous,
                      email: event.target.value,
                    }))
                  }
                  className="h-11 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-[#F56B1E]/70 focus:bg-white/[0.08]"
                />
              </label>

              {betaStatus && (
                <p
                  className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                    betaStatus.type === "success"
                      ? "border-emerald-400/35 bg-emerald-500/10 text-emerald-200"
                      : "border-red-400/35 bg-red-500/10 text-red-200"
                  }`}
                >
                  {betaStatus.message}
                </p>
              )}

              <div className="mt-5 flex flex-wrap justify-end gap-3">
                <button
                  type="submit"
                  disabled={isBetaSubmitting}
                  className="h-11 rounded-xl bg-[#F56B1E] px-5 text-sm font-semibold text-black transition hover:bg-[#ff7f34] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isBetaSubmitting ? "Envoi..." : "Demander l'accès bêta"}
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-[#2E4E9C]/45 bg-gradient-to-br from-[#233976]/35 to-[#151415]/20 p-5 sm:p-6">
            <h4 className="text-xl font-bold text-[#7ca2ff]">
              iOS - Bientôt disponible
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              L'application iOS HoopSphere est actuellement en cours de
              développement et sera disponible prochainement sur l'App Store.
            </p>
            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-white/70">
                Nous annoncerons la sortie officielle iOS dès que l'application
                sera prête.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={closeDownloadModal}
                className="h-11 rounded-xl border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/10"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <footer className="bg-[#151415] text-white">
        <div className="mx-auto px-8 flex flex-col md:flex-row flex-wrap justify-around items-center md:items-center text-center md:text-left py-10 gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/img/LOGO-H.png"
              alt="HoopSphere Logo"
              className="w-[20rem] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Liens */}
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

          {/* Réseaux sociaux */}
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

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-s gap-4 py-4 text-white/80">
          <span>COPYRIGHT © {new Date().getFullYear()} HoopSphere</span>
          <span className="hidden sm:inline">|</span>
          <span>TOUS DROITS RÉSERVÉS</span>
        </div>
      </footer>
  </div>
  );
}

export default App;

