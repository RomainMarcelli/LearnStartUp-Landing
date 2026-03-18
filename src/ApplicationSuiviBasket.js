import { useEffect } from "react";
import SiteFooter from "./components/SiteFooter";

const pageTitle = "Application suivi basket & statistiques | HoopSphere";
const pageDescription =
  "HoopSphere est une application basket dédiée au recrutement sportif digital: profils joueurs/clubs, statistiques e-Marque, offres, candidatures, messagerie et visibilité premium.";
const pageUrl = "https://hoopsphere.fr/application-suivi-basket";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HoopSphere",
  applicationCategory: "SportsApplication",
  operatingSystem: "iOS, Android",
  description:
    "Application de recrutement basket avec profils, statistiques et candidatures",
  url: "https://hoopsphere.fr",
};

function ApplicationSuiviBasket() {
  useEffect(() => {
    const previousTitle = document.title;
    const previousMetaDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");
    const previousCanonical = document
      .querySelector('link[rel="canonical"]')
      ?.getAttribute("href");
    const previousRobots = document
      .querySelector('meta[name="robots"]')
      ?.getAttribute("content");

    document.title = pageTitle;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute("content", pageDescription);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", pageUrl);

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "index, follow");

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "application-suivi-basket-schema";
    schemaScript.text = JSON.stringify(softwareSchema);
    document.head.appendChild(schemaScript);

    return () => {
      document.title = previousTitle;
      if (previousMetaDescription) {
        descriptionMeta.setAttribute("content", previousMetaDescription);
      }
      if (previousCanonical) {
        canonicalLink.setAttribute("href", previousCanonical);
      }
      if (previousRobots) {
        robotsMeta.setAttribute("content", previousRobots);
      }
      schemaScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#101114] text-white">
      <header className="border-b border-white/10 bg-[#202020]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-8">
          <a href="/" className="inline-flex items-center gap-3">
            <img
              src="/img/LOGO-H.png"
              alt="Logo HoopSphere"
              className="h-[56px] w-auto"
              decoding="async"
            />
          </a>
          <a
            href="/"
            className="rounded-full border border-[#F56B1E]/60 px-5 py-2 text-sm font-semibold text-[#F56B1E] transition hover:bg-[#F56B1E]/10"
          >
            Retour à l'accueil
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Application suivi basket et recrutement digital avec HoopSphere
        </h1>

        <p className="mt-7 text-lg leading-relaxed text-white/85">
          HoopSphere est une application mobile cross-platform dédiée au
          basketball, conçue pour digitaliser et moderniser le recrutement
          sportif. La plateforme met en relation joueurs, clubs et entraîneurs
          dans un cadre professionnel orienté performance, visibilité et
          opportunités sportives.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-white/85">
          Contrairement à un réseau social classique, HoopSphere centralise les
          profils, les statistiques, les offres de clubs et les candidatures
          dans un écosystème structuré. L'application simplifie des démarches
          encore trop informelles (réseau personnel, messages dispersés, envois
          séparés de vidéos) pour les transformer en un processus clair et
          traçable.
        </p>

        <h2 className="mt-10 text-3xl font-bold leading-tight sm:text-4xl">
          Fonctionnement général: joueur ou club
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/85">
          Lors de l'inscription, chaque utilisateur choisit son rôle. Un joueur
          accède à un espace de valorisation sportive (profil, performances,
          vidéos, candidatures). Un club accède à un espace de recrutement
          (offres, réception des candidatures, consultation des profils,
          contact direct). Cette logique améliore la lisibilité des échanges et
          accélère la prise de décision.
        </p>

        <h2 className="mt-10 text-3xl font-bold leading-tight sm:text-4xl">
          Les fonctionnalités clés de HoopSphere
        </h2>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-white/85">
          <li>
            Création de profil détaillé: infos personnelles, poste, niveau,
            statistiques, vidéos, expériences et parcours.
          </li>
          <li>
            Import automatique des statistiques via PDF e-Marque pour intégrer
            rapidement des données officielles de match.
          </li>
          <li>
            Publication d'offres par les clubs et candidatures simplifiées côté
            joueurs, avec un suivi centralisé.
          </li>
          <li>
            Feed vidéo (highlights) avec vues, likes et favoris pour renforcer
            la visibilité des talents.
          </li>
          <li>
            Messagerie interne sécurisée pour échanger directement après une
            candidature ou une consultation de profil.
          </li>
          <li>
            Classement et mécanismes de mise en avant selon l'activité, les
            performances et les interactions.
          </li>
        </ul>

        <p className="mt-7 text-lg leading-relaxed text-white/85">
          HoopSphere fonctionne sur un modèle freemium. La version gratuite
          couvre les besoins essentiels. La version Premium ajoute notamment une
          visibilité renforcée dans les classements, une analyse statistique
          plus avancée et des options de mise en avant prioritaires.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-white/85">
          En combinant application suivi basket, application statistique basket
          et outils de recrutement digital, HoopSphere répond à un besoin réel
          du terrain: connecter efficacement les talents et les recruteurs avec
          une solution centralisée, moderne et adaptée aux exigences actuelles
          du basketball.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/"
            className="rounded-xl bg-[#F56B1E] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7f34]"
          >
            Voir la landing page
          </a>
          <a
            href="/#faq"
            className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            Lire la FAQ
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default ApplicationSuiviBasket;

