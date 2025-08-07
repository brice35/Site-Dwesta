import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const NosSolutions = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#f9f8fc] to-[#ebe8f8] py-16 px-4 sm:px-10 text-black">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Nos solutions de <span className="text-[#000]">développement web et mobile</span>
      </h2>

      <p className="text-center text-lg max-w-3xl mx-auto mb-10">
        Des sites performants, des applications intuitives, un accompagnement expert à chaque étape.<br />
        Chez DWESTA, nous concevons des solutions web sur mesure pour répondre à vos besoins métiers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Bloc 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Sites vitrines</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Design personnalisé</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Compatible mobile et tablette</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Référencement naturel optimisé (SEO)</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Assistance 6j/7 et support utilisateurs</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">À partir de 549 414 FCFA</p>
        </div>

        {/* Bloc 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Applications web basiques</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Authentification des utilisateurs</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Tableaux de bord et base de données</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface web responsive</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">À partir de 1 729 200 FCFA</p>
        </div>

        {/* Bloc 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Applications web avancées</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Statistiques personnalisées</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Modules ERP, CRM spécifiques</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface multi-utilisateurs & sécurité renforcée</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">Sur devis personnalisé</p>
        </div>

        {/* Bloc 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Plateformes SaaS (avec abonnement)</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface moderne et évolutive</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Paiements locaux & internationaux</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Interface web responsive</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">À partir de 3 930 000 FCFA</p>
        </div>

        {/* Bloc 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Optimisation SEO</h3>
          <ul className="space-y-2">
            <li><CheckCircle className="inline mr-2 text-green-500" />Analyse technique & mots-clés</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Structure SEO on-page</li>
            <li><CheckCircle className="inline mr-2 text-green-500" />Rapport d’audit & recommandations</li>
          </ul>
          <p className="mt-4 text-orange-500 font-semibold">275 100 FCFA</p>
        </div>
                {/* Bloc 6 - Solutions IT professionnelles */}
        <div className=" rounded-2xl p-20 md:col-span-2 bg-[#edeaf8] ">
          <h3 className="text-2xl font-bold mb-4">Nos solutions IT <span className="text-[#6b21a8]">professionnelles</span></h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2 ">Infogérance Imprimante</h4>
              <ul className="space-y-1 ">
                <li><CheckCircle className="inline mr-2 text-green-500" />Maintenance 24h/24 — SLA garantis</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Logiciel de contrôle et de gestion d'impressions</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Gestion des consommables et pièces</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Assistance 5j/7 et support utilisateurs</li>
              </ul>
              <button className="mt-4  text-black font-semibold py-1 px-3 rounded inline-flex items-center">
                <a
                  href="/docs/fichier-it.pdf" // Remplace ce chemin par le vrai fichier
                   download
                  className="mt-4 inline-block bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-200"
                  >
                 Télécharger le fichier <span className="ml-2">📁</span>
                </a>

              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Hotline et support utilisateur</h4>
              <ul className="space-y-1">
                <li><CheckCircle className="inline mr-2 text-green-500" />Hotline 5j/7 ou 7j/7 selon contrat</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Système de ticketing GLPI</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Suivi des SLA, alertes et reporting</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Accompagnement utilisateurs et administrateurs</li>
              </ul>
              <button className="mt-4  text-black font-semibold py-1 px-3 rounded inline-flex items-center">
                <a
                  href="/docs/fichier-it.pdf" // Remplace ce chemin par le vrai fichier
                   download
                  className="mt-4 inline-block bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-200"
                  >
                 Télécharger le fichier <span className="ml-2">📁</span>
                </a>

              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Laboratoire informatique</h4>
              <ul className="space-y-1">
                <li><CheckCircle className="inline mr-2 text-green-500" />30 postes + serveurs + rétroprojecteur + switchs</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Salle climatisée, sécurisée et connectée</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Installation et mise en réseau clés en main</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Supervision, maintenance et gestion utilisateurs</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Formation et accompagnement pédagogique</li>
              </ul>
              <button className="mt-4  text-black font-semibold py-1 px-3 rounded inline-flex items-center">
                <a
                  href="/docs/fichier-it.pdf" // Remplace ce chemin par le vrai fichier
                   download
                  className="mt-4 inline-block bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-200"
                  >
                 Télécharger le fichier <span className="ml-2">📁</span>
                </a>

              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Déploiement réseau LAN/WAN</h4>
              <ul className="space-y-1">
                <li><CheckCircle className="inline mr-2 text-green-500" />Étude et architecture réseau</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Installation câbles, routeurs, switchs, baies</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Sécurité des accès et haute disponibilité</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Suivi, maintenance et évolutivité garantie</li>
              </ul>
              <button className="mt-4  text-black font-semibold py-1 px-3 rounded inline-flex items-center">
                <a
                  href="/docs/fichier-it.pdf" // Remplace ce chemin par le vrai fichier
                   download
                  className="mt-4 inline-block bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-200"
                  >
                 Télécharger le fichier <span className="ml-2">📁</span>
                </a>

              </button>
            </div>
          </div>
        </div>

        {/* Bloc 7 - Solutions SIG */}
        <div className=" rounded-2xl p-6 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Nos solutions <span className="text-[#2563eb]">SIG</span> (Systèmes d’Information Géographique)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Géolocalisation de poteaux — OPGIS</h4>
              <ul className="space-y-1">
                <li><CheckCircle className="inline mr-2 text-green-500" />Localisation GPS précise de chaque poteau</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Référencement technique et visuel</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Tableau de bord, historique</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Reporting global de l’état du parc</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Solution déployable en 30 jours</li>
              </ul>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Référencement de réseaux d’eau — OPWATER</h4>
              <ul className="space-y-1">
                <li><CheckCircle className="inline mr-2 text-green-500" />Cartographie des vannes, fourreaux, points d’eau</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Données techniques : état, année de pose, matériaux</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Vue globale pour anticiper les extensions</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Rapports pour direction et audits</li>
              </ul>

            </div>

            <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2">SIG sur-mesure — Solution à la carte</h4>
              <ul className="space-y-1">
                <li><CheckCircle className="inline mr-2 text-green-500" />Cadrage des besoins et collecte terrain</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Architecture SIG personnalisée</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Intégration et maintenance avec formation</li>
                <li><CheckCircle className="inline mr-2 text-green-500" />Des services selon besoin complet</li>
              </ul>

            </div>
          </div>
          {/* Bloc 8 - Tracking et gestion de flotte */}
<div className=" rounded-2xl p-6 md:col-span-2">
  <h3 className="text-2xl font-bold mb-4">Tracking et <span className="text-[#000]">Gestion de flotte</span> par DWESTA</h3>
  <p className="text-gray-600 mb-6">Supervisez, sécurisez et optimisez vos véhicules en toute simplicité.</p>
  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Fonctionnalités clés</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />Alerte sortie de zone, arrêt prolongé, excès de vitesse</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Planification et replay des trajets</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Rapports : kilométrage, conduite, activité</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Interface web/mobile intuitive</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Données hébergées en Afrique ou Europe</li>
      </ul>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Accompagnement inclus</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />Formation des utilisateurs</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Installation des boîtiers 4G ou satellites</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Support technique 5j/7</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Accès client &amp; gestion multi-véhicules</li>
      </ul>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Tracking Satellite – Actualisation toutes les 3 minutes</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />Fonctionne même en zone blanche</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Couverture globale, sans dépendance aux réseaux mobiles</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Recommandé pour zones rurales, minières, fluviales ou isolées</li>
      </ul>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Tracking 4G/2G – Actualisation en continu</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />Localisation en temps réel, seconde par seconde</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Idéal en zones bien couvertes par les réseaux cellulaires</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Affichage dynamique sur carte interactive</li>
      </ul>

    </div>

    <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Flottes couvertes</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />Motos</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Voitures &amp; utilitaires</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Camions &amp; bus</li>
      </ul>
    </div>
  </div>
</div>
<div className="md:col-span-2 rounded-2xl p-6 m-0 text-center">
        <a
        href="/docs/tracking.pdf"
        download
        className="mt-4 inline-block bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-200"
      >
        Télécharger le fichier <span className="ml-2">📁</span>
      </a>
        </div>

{/* Bloc 9 - Conseil et appels d'offres */}
<div className=" rounded-2xl p-6 md:col-span-2">
  <h3 className="text-2xl font-bold mb-4">Conseil et <span className="text-[#000]">Accompagnement</span> aux appels d’offres</h3>
  <p className="text-gray-600 mb-6">Structurez vos projets. Répondez avec impact. Gagnez en sérénité.</p>
  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Réponse aux appels d’offres publics et privés</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />Analyse du cahier des charges</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Constitution du dossier administratif</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Rédaction de la mémoire technique</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Modélisation financière (budget, chiffrage)</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Préparation aux soutenances et soutiens</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Déploiement et suivi du processus</li>
      </ul>
      <a
        href="/docs/appels-offres.pdf"
        download
        className="mt-4 inline-block bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-200"
      >
        Télécharger le fichier <span className="ml-2">📁</span>
      </a>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">Gestion de projet externalisée</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />Cadrage et planification du projet</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Structuration des rôles et responsabilités</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Contrôle qualité, pilotage et clôture</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Suivi des indicateurs clés (KPI)</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Mise en œuvre, rapports, et monitoring</li>
      </ul>
      <a
        href="/docs/gestion-projet.pdf"
        download
        className="mt-4 inline-block bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-200"
      >
        Télécharger le fichier <span className="ml-2">📁</span>
      </a>
    </div>

    <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-2">DWESTA, votre partenaire de confiance</h4>
      <ul className="space-y-1">
        <li><CheckCircle className="inline mr-2 text-green-500" />+10 ans d’expériences multisectorielles (Afrique &amp; Europe)</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Consultants et ingénieurs spécialisés</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Méthodologie rigoureuse orientée résultats</li>
        <li><CheckCircle className="inline mr-2 text-green-500" />Engagement, confidentialité et excellence opérationnelle</li>
      </ul>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default NosSolutions;
