import { useEffect, useState } from "react";
import LegalHeader from "./components/LegalHeader";
import SiteFooter from "./components/SiteFooter";

function GestionCookies() {
  const [cookieStatus, setCookieStatus] = useState(
    "Aucun choix détecté pour le moment."
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Gestion des cookies — HoopSphere";

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

  const openAxeptioSettings = () => {
    if (window._axcb?.showSettings) {
      window._axcb.showSettings();
      setCookieStatus("Le gestionnaire de préférences Axeptio a été ouvert.");
      return;
    }

    setCookieStatus(
      "Le gestionnaire de cookies n'est pas encore disponible. Rechargez la page et réessayez."
    );
  };

  return (
    <div className="min-h-screen bg-[#151415] text-white">
      <LegalHeader
        active="cookies"
        title="Gestion des cookies"
        subtitle="Cette page décrit les cookies utilisés et ouvre le centre de préférences Axeptio."
      />

      <main className="mx-auto max-w-3xl px-6 py-10">
        <p className="mb-8 text-[#999999]">Dernière mise à jour : mars 2026</p>

        <p className="mb-3 text-[#cccccc]">
          Conformément à la réglementation française (loi Informatique et
          Libertés) et européenne (RGPD, directive ePrivacy), nous vous
          informons de l'utilisation de cookies sur le site HoopSphere.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          1. Qu'est-ce qu'un cookie ?
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Un cookie est un petit fichier texte déposé sur votre terminal
          (ordinateur, smartphone, tablette) lors de la visite d'un site web.
          Il permet au site de mémoriser des informations sur votre visite,
          comme vos préférences de langue ou d'autres paramètres.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          2. Les cookies que nous utilisons
        </h2>
        <div className="mb-3 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border border-[#333333] bg-[#2a2a2a] px-4 py-3 font-semibold text-[#F56B1E]">
                  Type
                </th>
                <th className="border border-[#333333] bg-[#2a2a2a] px-4 py-3 font-semibold text-[#F56B1E]">
                  Nom
                </th>
                <th className="border border-[#333333] bg-[#2a2a2a] px-4 py-3 font-semibold text-[#F56B1E]">
                  Finalité
                </th>
                <th className="border border-[#333333] bg-[#2a2a2a] px-4 py-3 font-semibold text-[#F56B1E]">
                  Durée
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  Essentiel
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  cookieConsent
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  Mémorise votre choix concernant les cookies
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  1 an
                </td>
              </tr>
              <tr>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  Analytique
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  _ga, _gid
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  Google Analytics : mesure d'audience anonymisée
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  13 mois
                </td>
              </tr>
              <tr>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  Marketing
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  _fbp
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  Meta Pixel : mesure de performance publicitaire
                </td>
                <td className="border border-[#333333] px-4 py-3 text-[#cccccc]">
                  90 jours
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          3. Cookies essentiels
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Ces cookies sont indispensables au fonctionnement du site. Ils ne
          nécessitent pas votre consentement car ils sont strictement
          nécessaires à la fourniture du service. Le cookie{" "}
          <code>cookieConsent</code> enregistre votre choix d'acceptation ou de
          refus des cookies.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          4. Cookies analytiques
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Ces cookies nous permettent de mesurer l'audience du site et
          d'analyser la navigation pour améliorer le service. Ils ne sont
          déposés qu'avec votre consentement. Nous utilisons Google Analytics
          avec anonymisation de l'adresse IP.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          5. Cookies marketing
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Ces cookies permettent de mesurer l'efficacité de nos campagnes
          publicitaires. Ils ne sont déposés qu'avec votre consentement
          explicite.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          6. Gérer vos préférences
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Vous pouvez à tout moment modifier vos préférences en matière de
          cookies :
        </p>
        <p className="mb-3 text-[#cccccc]">
          La gestion du consentement sur le site HoopSphere est assurée par{" "}
          <strong>Axeptio</strong>. Les boutons ci-dessous ouvrent directement
          le centre de préférences Axeptio.
        </p>

        <div className="my-8 rounded-xl bg-[#1a1a2e] p-6 text-center">
          <p className="mb-4 font-semibold text-white">
            Modifier votre choix de cookies
          </p>
          <button
            type="button"
            onClick={openAxeptioSettings}
            className="mr-2 inline-block cursor-pointer rounded-lg bg-[#F56B1E] px-6 py-3 font-semibold text-white transition hover:bg-[#ff8a47]"
          >
            Ouvrir les préférences cookies
          </button>
          <button
            type="button"
            onClick={openAxeptioSettings}
            className="ml-2 inline-block cursor-pointer rounded-lg border border-[#666666] bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-[#333333]"
          >
            Mettre à jour mon choix
          </button>
          <p className="mt-4 text-sm text-[#cccccc]">{cookieStatus}</p>
        </div>

        <p className="mb-3 text-[#cccccc]">
          Vous pouvez également configurer votre navigateur pour refuser les
          cookies. Voici les liens vers les pages de gestion des cookies des
          principaux navigateurs :
        </p>
        <ul className="mb-3 list-disc space-y-2 pl-6 text-[#cccccc]">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F56B1E] underline-offset-4 hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F56B1E] underline-offset-4 hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/fr-fr/guide/safari/sfri11471"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F56B1E] underline-offset-4 hover:underline"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/fr-fr/microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F56B1E] underline-offset-4 hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          7. Durée de conservation du consentement
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Votre choix concernant les cookies est conservé pendant 13 mois,
          conformément aux recommandations de la CNIL. Passé ce délai, votre
          consentement vous sera de nouveau demandé.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-bold text-white">
          8. En savoir plus
        </h2>
        <p className="mb-3 text-[#cccccc]">
          Pour en savoir plus sur les cookies et vos droits, vous pouvez
          consulter le site de la{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-traceurs-que-dit-la-loi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            CNIL
          </a>
          .
        </p>
        <p className="mb-3 text-[#cccccc]">
          Pour toute question, consultez notre{" "}
          <a
            href="/politique-confidentialite"
            className="text-[#F56B1E] underline-offset-4 hover:underline"
          >
            Politique de confidentialité
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}

export default GestionCookies;

