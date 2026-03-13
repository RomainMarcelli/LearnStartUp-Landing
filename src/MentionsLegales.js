import { useEffect } from "react";
import LegalHeader from "./components/LegalHeader";
import SiteFooter from "./components/SiteFooter";

function MentionsLegales() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Mentions légales — HoopSphère";

    const robotsMetaSelector = 'meta[name="robots"]';
    const existingRobotsMeta = document.querySelector(robotsMetaSelector);
    const hadRobotsMeta = Boolean(existingRobotsMeta);
    const previousRobotsContent =
      existingRobotsMeta?.getAttribute("content") ?? null;
    const robotsMeta = existingRobotsMeta || document.createElement("meta");

    if (!existingRobotsMeta) {
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.setAttribute("content", "noindex");

    return () => {
      document.title = previousTitle;
      if (hadRobotsMeta) {
        robotsMeta.setAttribute("content", previousRobotsContent || "");
      } else {
        robotsMeta.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#151415] text-white">
      <LegalHeader
        active="mentions"
        title="Mentions légales"
        subtitle="Informations légales et responsabilités liées au site HoopSphère."
      />

      <main className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          1. Éditeur du site
        </h2>
        <p className="mb-3 text-[#cccccc]">Nom du site : HoopSphère</p>
        <p className="mb-3 text-[#cccccc]">
          URL :{" "}
          <a
            href="https://hoopsphere.fr"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            https://hoopsphere.fr
          </a>
        </p>
        <p className="mb-3 text-[#cccccc]">
          Statut : Projet entrepreneurial en cours d'immatriculation
        </p>
        <p className="mb-3 text-[#cccccc]">
          Email :{" "}
          <a
            href="mailto:hoopsphere.fr@gmail.com"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            hoopsphere.fr@gmail.com
          </a>
        </p>
        <p className="mb-3 text-[#cccccc]">
          Directeur de la publication : Jonas Suhard
        </p>
        {/* TODO DEVS : Une fois la société immatriculée, ajouter ici :
            - Raison sociale et forme juridique (ex : SAS HoopSphère)
            - Capital social
            - Adresse du siège social
            - Numéro RCS
            - Numéro de TVA intracommunautaire */}

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">2. Hébergeur</h2>
        <p className="mb-3 text-[#cccccc]">Firebase Hosting — Google LLC</p>
        <p className="mb-3 text-[#cccccc]">
          1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis
        </p>
        <p className="mb-3 text-[#cccccc]">
          Site :{" "}
          <a
            href="https://firebase.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            firebase.google.com
          </a>
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          3. Propriété intellectuelle
        </h2>
        <p className="mb-3 text-[#cccccc]">
          L'ensemble du contenu du site HoopSphère (textes, images, logos,
          vidéos, graphismes, icônes) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction, représentation, modification ou
          adaptation, totale ou partielle, est interdite sans autorisation
          préalable écrite.
        </p>
        <p className="mb-3 text-[#cccccc]">
          Le logo et la marque HoopSphère sont des marques déposées. Leur
          utilisation sans autorisation est interdite.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          4. Responsabilité
        </h2>
        <p className="mb-3 text-[#cccccc]">
          HoopSphère met tout en œuvre pour assurer l'exactitude des
          informations diffusées sur le site. Toutefois, HoopSphère ne saurait
          être tenu responsable des omissions, inexactitudes ou carences dans la
          mise à jour de ces informations.
        </p>
        <p className="mb-3 text-[#cccccc]">
          HoopSphère décline toute responsabilité en cas de difficultés
          techniques liées à l'utilisation du site ou de l'application mobile.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          5. Liens hypertextes
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Le site peut contenir des liens vers d'autres sites internet.
          HoopSphère ne dispose d'aucun moyen de contrôle du contenu de ces
          sites tiers et n'assume aucune responsabilité quant à leur contenu.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          6. Données personnelles
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Les données personnelles collectées sur ce site sont traitées
          conformément au Règlement Général sur la Protection des Données
          (RGPD). Pour plus d'informations, consultez notre{" "}
          <a
            href="/politique-confidentialite"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            Politique de confidentialité
          </a>
          .
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">7. Cookies</h2>
        <p className="mb-3 text-[#cccccc]">
          Ce site utilise des cookies. Pour en savoir plus sur notre utilisation
          des cookies et gérer vos préférences, consultez notre page{" "}
          <a
            href="/gestion-cookies"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            Gestion des cookies
          </a>
          .
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          8. Droit applicable
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Les présentes mentions légales sont soumises au droit français. En cas
          de litige, les tribunaux français seront seuls compétents.
        </p>

      </main>
      <SiteFooter />
    </div>
  );
}

export default MentionsLegales;
