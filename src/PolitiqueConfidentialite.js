import { useEffect } from "react";
import LegalHeader from "./components/LegalHeader";
import SiteFooter from "./components/SiteFooter";

function PolitiqueConfidentialite() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Politique de confidentialité — HoopSphère";

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
        active="confidentialite"
        title="Politique de confidentialité"
        subtitle="Traitement et protection des données personnelles des utilisateurs."
      />

      <main className="mx-auto max-w-3xl px-6 py-10">
        <p className="mb-8 text-[#999999]">Dernière mise à jour : mars 2026</p>

        <p className="mb-3 text-[#cccccc]">
          HoopSphère s'engage à protéger la vie privée de ses utilisateurs.
          Cette politique de confidentialité décrit comment nous collectons,
          utilisons et protégeons vos données personnelles conformément au
          Règlement Général sur la Protection des Données (RGPD) et à la loi
          Informatique et Libertés.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          1. Responsable du traitement
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Le responsable du traitement des données est :
        </p>
        <p className="mb-3 text-[#cccccc]">
          <strong>HoopSphère</strong> — Jonas Suhard
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
        {/* TODO DEVS : Une fois la société immatriculée, ajouter adresse du siège et nom du DPO si désigné */}

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          2. Données collectées
        </h2>
        <p className="mb-3 text-[#cccccc]">Nous collectons les données suivantes :</p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-[#cccccc]">
          <li>
            <strong>Données d'inscription</strong> : nom, prénom, adresse
            email, mot de passe (chiffré)
          </li>
          <li>
            <strong>Données de profil</strong> : photo, poste de jeu, club,
            statistiques sportives
          </li>
          <li>
            <strong>Données de navigation</strong> : adresse IP, type de
            navigateur, pages visitées (via cookies analytiques, sous réserve
            de consentement)
          </li>
          <li>
            <strong>Données de newsletter</strong> : adresse email (via le
            formulaire d'inscription)
          </li>
        </ul>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          3. Finalités du traitement
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Vos données sont collectées pour les finalités suivantes :
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-[#cccccc]">
          <li>Création et gestion de votre compte utilisateur</li>
          <li>Mise en relation entre joueurs, coachs et clubs</li>
          <li>Suivi des performances sportives</li>
          <li>Envoi de communications (newsletter, notifications)</li>
          <li>Amélioration du service et analyses statistiques anonymisées</li>
        </ul>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          4. Base légale
        </h2>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-[#cccccc]">
          <li>
            <strong>Consentement</strong> : pour l'inscription à la newsletter
            et les cookies analytiques
          </li>
          <li>
            <strong>Exécution du contrat</strong> : pour la fourniture du
            service (compte, profil, statistiques)
          </li>
          <li>
            <strong>Intérêt légitime</strong> : pour l'amélioration du service
            et la sécurité
          </li>
        </ul>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          5. Durée de conservation
        </h2>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-[#cccccc]">
          <li>
            Données de compte : conservées pendant la durée d'utilisation du
            service, puis 3 ans après la dernière connexion
          </li>
          <li>Données de newsletter : jusqu'au désabonnement</li>
          <li>
            Données de navigation : 13 mois maximum (conformément aux
            recommandations de la CNIL)
          </li>
        </ul>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          6. Destinataires des données
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Vos données ne sont pas vendues à des tiers. Elles peuvent être
          partagées avec :
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-[#cccccc]">
          <li>Nos sous-traitants techniques (hébergement, envoi d'emails)</li>
          <li>Les autorités compétentes en cas d'obligation légale</li>
        </ul>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          7. Transferts hors UE
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Si des données sont transférées hors de l'Union Européenne, nous nous
          assurons que des garanties appropriées sont mises en place (clauses
          contractuelles types, décision d'adéquation).
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">8. Vos droits</h2>
        <p className="mb-3 text-[#cccccc]">
          Conformément au RGPD, vous disposez des droits suivants :
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-[#cccccc]">
          <li>
            <strong>Droit d'accès</strong> : obtenir une copie de vos données
          </li>
          <li>
            <strong>Droit de rectification</strong> : corriger des données
            inexactes
          </li>
          <li>
            <strong>Droit à l'effacement</strong> : demander la suppression de
            vos données
          </li>
          <li>
            <strong>Droit à la portabilité</strong> : recevoir vos données dans
            un format structuré
          </li>
          <li>
            <strong>Droit d'opposition</strong> : vous opposer au traitement de
            vos données
          </li>
          <li>
            <strong>Droit à la limitation</strong> : restreindre le traitement
            de vos données
          </li>
        </ul>
        <p className="mb-3 text-[#cccccc]">
          Pour exercer vos droits, contactez-nous à :{" "}
          <a
            href="mailto:hoopsphere.fr@gmail.com"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            hoopsphere.fr@gmail.com
          </a>
        </p>
        <p className="mb-3 text-[#cccccc]">
          Vous pouvez également introduire une réclamation auprès de la{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            CNIL
          </a>
          .
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">9. Sécurité</h2>
        <p className="mb-3 text-[#cccccc]">
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données : chiffrement des mots de passe,
          connexions sécurisées (HTTPS), accès restreint aux données.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          10. Modifications
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Cette politique peut être mise à jour. Nous vous informerons de tout
          changement significatif par email ou via l'application.
        </p>

      </main>
      <SiteFooter />
    </div>
  );
}

export default PolitiqueConfidentialite;
