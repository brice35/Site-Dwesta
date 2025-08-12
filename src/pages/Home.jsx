import React from 'react';
import heroImage from '../assets/hero-image.jpg';
import davesne from '../assets/davesne.jpg';
import abdoulaye from '../assets/abdoulaye.jpg';
import emmanuel from '../assets/emmanuel.png';
import domaineWeb from '../assets/domaine-web.jpg';
import domaineSIG from '../assets/domaine-sig.jpg';
import domaineInfra from '../assets/domaine-infra.jpg';
import sigIcon from "../assets/08eff108-fe28-4515-ac96-c05bcba5debe.png"
// Import des icônes pour les solutions IT
import printIcon from '../assets/print.png';
import labIcon from '../assets/lab.png';
import hotlineIcon from '../assets/hotline.png';
import networkIcon from '../assets/network.png';

// Import des icônes pour les solutions SIG
import qgisIcon from '../assets/qgis.png';
import opwaterIcon from '../assets/opwater.png';
import customSigIcon from '../assets/custom-sig.png';

import satelliteIcon from '../assets/satellite.png';
import cellular4GIcon from '../assets/4g.png';
import dashboardIcon from '../assets/dashboard.png';

import publicTenderIcon from '../assets/appel-offres.png';
import externalProjectIcon from '../assets/external-project.png';
import partnerIcon from '../assets/partner.png';

import { Link } from 'react-router-dom'; 
import printPreviewIcon from "../assets/écran.png";
import trackingIcon from "../assets/voiture.png";
import conseilIcon from "../assets/localisation.png";
import codeIcon from "../assets/code.png";
import devIcon from "../assets/ampoule.png";




const Home = () => {
  return (
    <div className="bg-white text-gray-800">

      
      {/* SECTION HÉRO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white">
        <div className="max-w-xl mb-10 md:mb-0">
          <div className="h-2 w-40 bg-orange-300 rounded-full mb-6"></div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            L’énergie de l’Afrique<br /> au service d’un avenir connecté
          </h1>
          <p className="text-gray-600 mb-6">
            Solutions numériques, systèmes d'information et énergie IT<br />
            pour les entreprises et institutions.
          </p>
          <Link
            to="/solutions"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md inline-block"
          >
            Découvrir nos services →
          </Link>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src={heroImage}
            alt="Présentation de la mission de DWESTA"
            className="w-100 h-100 rounded-full shadow-md object-cover"
          />
        </div>
      </section>

      {/* SECTION DOMAINES D’EXPERTISE */}
      <section className="px-6 md:px-16 py-20 bg-[#F9F8FF] text-center">
        {/* ... */}
         <p className="text-orange-400 uppercase text-sm font-medium mb-2">✦ Nos offres</p>
        <h2 className="text-3xl font-bold mb-4">Nos domaines d'expertise.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
        <img src={printPreviewIcon} alt="IT et infogérance" className="w-12 h-12" />
        <div>
          <h3 className="font-semibold text-lg">Solutions IT et Infogérance</h3>
          <p className="text-gray-600 text-sm mb-2">
            Maintenance, gestion de serveurs, virtualisation, sécurité informatique et cloud pour les entreprises.
          </p>
          <Link to="/solutions" className="text-orange-500 font-medium text-sm hover:underline">
            Plus de détails →
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
        <img src={trackingIcon} alt="Tracking flotte" className="w-12 h-12" />
        <div>
          <h3 className="font-semibold text-lg">Tracking et gestion de flotte</h3>
          <p className="text-gray-600 text-sm mb-2">
            Géolocalisation de véhicules, suivi en temps réel, alertes et reporting personnalisés pour vos flottes.
          </p>
          <Link to="/solutions" className="text-orange-500 font-medium text-sm hover:underline">
            Plus de détails →
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
        <img src={conseilIcon} alt="Conseil" className="w-12 h-12" />
        <div>
          <h3 className="font-semibold text-lg">Conseil & Appels d’offres</h3>
          <p className="text-gray-600 text-sm mb-2">
            Accompagnement technique et rédaction de dossiers pour les marchés publics ou privés.
          </p>
          <Link to="/solutions" className="text-orange-500 font-medium text-sm hover:underline">
            Plus de détails →
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
        <img src={codeIcon} alt="SIG" className="w-12 h-12" />
        <div>
          <h3 className="font-semibold text-lg">Systèmes d’Information Géographique (SIG)</h3>
          <p className="text-gray-600 text-sm mb-2">
            Cartographie interactive, analyse spatiale, intégration de données géolocalisées pour projets urbains et ruraux.
          </p>
          <Link to="/solutions" className="text-orange-500 font-medium text-sm hover:underline">
            Plus de détails →
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
        <img src={devIcon} alt="Développement web" className="w-12 h-12" />
        <div>
          <h3 className="font-semibold text-lg">Développement web et mobile</h3>
          <p className="text-gray-600 text-sm mb-2">
            Sites vitrines, applications métiers, plateformes e-commerce et SaaS sur mesure.
          </p>
          <Link to="/solutions" className="text-orange-500 font-medium text-sm hover:underline">
            Plus de détails →
          </Link>
        </div>
      </div>

    </div>

        <div className="flex justify-center gap-4">
          <Link
            to="/solutions"
            className="bg-orange-500 text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 inline-block"
          >
            Explorer maintenant →
          </Link>
          <Link
            to="/contact"
            className="text-orange-600 border border-orange-600 px-6 py-3 rounded-full hover:bg-orange-100 inline-block"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* SECTION QUI SOMMES-NOUS */}
      <section className="bg-[#F9F8FF] px-6 md:px-20 py-16 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">Qui sommes-nous ?</h3>
          <p>
            DWESTA SAS est une entreprise de services numériques créée par deux ingénieurs africains,
            engagés dans le développement technologique du continent. Forts de plus de 10 ans d'expérience,
            nous opérons entre Bangui (RCA), l’Afrique centrale et l’Europe.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Quelques chiffres clés</h3>
          <ul className="text-sm leading-relaxed text-gray-700">
            <li>+10 ans d'expérience en projets IT</li>
            <li>2 continents couverts (Afrique, Europe)</li>
            <li>Clients : ministères, ONG, entreprises privées</li>
            <li>+30 projets réalisés : infogérance, SIG, web apps</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Notre mission</h3>
          <p className="mb-4">
            Aider les organisations à moderniser leurs outils, fluidifier leurs opérations et piloter leurs ressources grâce à la technologie.
          </p>
          <h4 className="font-semibold">Nos valeurs</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Innovation pragmatique</li>
            <li>Excellence technique</li>
            <li>Engagement durable</li>
            <li>Collaboration humaine</li>
          </ul>
        </div>
      </section>

      {/* SECTION ÉQUIPE */}
      <section className="bg-white px-6 md:px-20 py-20 text-center">
        <p className="text-orange-400 uppercase text-sm font-medium mb-2">✦ Notre équipe</p>
        <h2 className="text-3xl font-bold mb-4">Équipe fondatrice</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Rencontrez les membres talentueux et passionnés de l’équipe qui font avancer notre entreprise chaque jour.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
        {[
          { name: "Davesne Yaya", role: "CEO", image: davesne ,},
          { name: "Abdoulaye Ngalewa", role: "COO", image: abdoulaye }
        ].map((person, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition w-72">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h4 className="font-semibold">{person.name}</h4>
          <p className="text-sm text-orange-500">{person.role}</p>
        </div>
        ))}
        </div>
      </section>
      {/* SECTION SOLUTIONS IT PRO */}
<section className="px-6 md:px-16 py-20 bg-white text-left">
  <p className="text-orange-400 uppercase text-sm font-medium mb-2">➤ NOS SOLUTIONS</p>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos solutions IT professionnelles</h2>
  <p className="text-gray-700 mb-10 max-w-3xl">
    DWESTA vous accompagne dans votre transformation numérique
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
    <div className="flex items-start gap-4">
      <img src={printIcon} alt="Impression" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Infogérance Impression</h3>
        <p className="text-gray-600 text-sm">Gérez vos impressions sans contraintes, avec un service tout compris.</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <img src={labIcon} alt="Laboratoire" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Laboratoire informatique</h3>
        <p className="text-gray-600 text-sm">Un environnement numérique complet pour la formation.</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <img src={hotlineIcon} alt="Hotline" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Hotline et support utilisateur</h3>
        <p className="text-gray-600 text-sm">Un centre de support réactif, formé et joignable.</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <img src={networkIcon} alt="Réseau" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Déploiement réseau LAN/WAN</h3>
        <p className="text-gray-600 text-sm">Connectez vos équipes avec un réseau fiable et sécurisé.</p>
      </div>
    </div>
  </div>
</section>

      {/* SECTION SOLUTIONS SIG */}
<section className="px-6 md:px-16 py-20 bg-[#FFFDFB] text-left">
  <p className="text-orange-400 uppercase text-sm font-medium mb-2">➤ NOS SOLUTIONS</p>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Nos solutions SIG<br className="block md:hidden" />
    <span className="block md:inline">(Systèmes d’Information Géographique)</span>
  </h2>
  <p className="text-gray-700 mb-10 max-w-3xl">
    Digitalisez vos infrastructures avec nos plateformes SIG puissantes et adaptées aux réalités du terrain.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
    <div className="flex items-start gap-4">
      <img src={qgisIcon} alt="QGIS" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Géolocalisation de poteaux — QGIS</h3>
        <p className="text-gray-600 text-sm">Maîtrisez vos infrastructures d’éclairage, télécoms ou énergies.</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <img src={opwaterIcon} alt="OPWATER" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Référencement de réseaux d’eau — OPWATER</h3>
        <p className="text-gray-600 text-sm">Un jumeau numérique pour piloter vos infrastructures hydrauliques.</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <img src={customSigIcon} alt="SIG Sur-mesure" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">SIG sur-mesure — Solution à la carte</h3>
        <p className="text-gray-600 text-sm">Une solution SIG conçue spécifiquement pour votre projet.</p>
      </div>
    </div>
  </div>
</section>

{/* SECTION TRACKING & GESTION DE FLOTTE */}
<section className="px-6 md:px-16 py-20 bg-white text-left">
  <p className="text-orange-400 uppercase text-sm font-medium mb-2">➤ GÉOLOCALISATION</p>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Tracking et Gestion de flotte par DWESTA
  </h2>
  <p className="text-gray-700 mb-10 max-w-3xl">
    Supervisez, sécurisez et optimisez vos véhicules en toute simplicité. Notre solution vous donne une visibilité constante sur vos véhicules, où qu’ils se trouvent.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
    <div className="flex items-start gap-4 max-w-xs">
      <img src={satelliteIcon} alt="Satellite Icon" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Technologie satellite</h3>
        <p className="text-gray-600 text-sm">
          Pour une couverture globale même dans les zones reculées.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 max-w-xs">
      <img src={cellular4GIcon} alt="4G Icon" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Technologie 4G</h3>
        <p className="text-gray-600 text-sm">
          Connexion rapide et efficace pour un suivi en temps réel.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 max-w-xs">
      <img src={dashboardIcon} alt="Tableau de bord Icon" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Suivi sur tableau de bord</h3>
        <p className="text-gray-600 text-sm">
          Visualisez vos véhicules et données de mobilité en direct.
        </p>
      </div>
    </div>
  </div>
</section>



{/* SECTION CONSEIL ET APPELS D’OFFRES */}
<section className="px-6 md:px-16 py-20 bg-[#FFFDFB] text-left">
  <p className="text-orange-400 uppercase text-sm font-medium mb-2">➤ ACCOMPAGNEMENT</p>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Conseil et Accompagnement aux appels d’offres
  </h2>
  <p className="text-gray-700 mb-10 max-w-3xl">
    DWESTA vous accompagne dans la conception, la réponse et la gestion de vos projets publics ou privés, depuis l’analyse du besoin jusqu’à la soutenance.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
    <div className="flex items-start gap-4 max-w-xs">
      <img src={publicTenderIcon} alt="Appels d'offres Icon" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Réponse aux appels d’offres</h3>
        <p className="text-gray-600 text-sm">
          Une méthodologie claire pour maximiser vos chances de succès.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 max-w-xs">
      <img src={externalProjectIcon} alt="Projet Icon" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">Gestion de projet externalisée</h3>
        <p className="text-gray-600 text-sm">
          Nous gérons votre dossier de A à Z, avec des livrables fiables.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 max-w-xs">
      <img src={partnerIcon} alt="Confiance Icon" className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">DWESTA, votre partenaire</h3>
        <p className="text-gray-600 text-sm">
          Une expertise de confiance, reconnue sur le continent africain.
        </p>
      </div>
    </div>
  </div>
</section>






    </div>
  );
};

export default Home;
