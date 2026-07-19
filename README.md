# Centre Dentaire VITALIA — Tanger

Une plateforme web moderne et haut de gamme dédiée au **Centre Dentaire VITALIA** à Tanger, Maroc. Ce site vitrine interactif met en valeur l'expertise du cabinet, ses spécialités médicales et esthétiques, et offre une expérience utilisateur fluide et apaisante conforme aux exigences du web moderne.

---

## 🌟 Points Forts & Design

Le site a été conçu avec une attention méticuleuse portée à l'expérience utilisateur (UX) et à l'identité visuelle (UI) :

*   **Esthétique Warm & Organic** : Une palette de couleurs épurée et apaisante alliant des tons crème (`#FCFAF7`), vert forêt profond (`#2d3c33`), grès/terracotta pour les accents (`#c0826e`) et charbon (`#1c201d`) pour une lisibilité maximale.
*   **Typographie Soignée** : Contraste élégant entre la police serif classique **Cormorant Garamond** (pour les titres) et la police moderne **Plus Jakarta Sans** (pour le texte courant).
*   **Mise en Page Asymétrique & Moderne** : Rupture avec les grilles traditionnelles au profit de compositions asymétriques aérées évoquant le calme et le professionnalisme.
*   **Animations Fluides** : Transitions douces et animations d'apparition au défilement optimisées avec **Framer Motion**.
*   **Accessibilité (A11y)** : Respect des contrastes de couleurs, navigation au clavier et styles de focus natifs travaillés (`focus-visible`).
*   **Responsive & Typographie Fluide** : Utilisation de la fonction CSS `clamp()` pour adapter dynamiquement la taille des textes à tous les écrans, du mobile aux écrans larges.

---

## ⚙️ Technologies & Dépendances

Le projet repose sur un socle technique robuste et moderne :

*   **Framework** : [Next.js 16 (App Router)](https://nextjs.org/) pour un rendu rapide et un SEO optimisé.
*   **Bibliothèque UI** : [React 19](https://react.dev/) avec support natif du **React Compiler** activé pour de meilleures performances de rendu.
*   **Langage** : [TypeScript](https://www.typescriptlang.org/) assurant la sécurité du typage.
*   **Styling** : [Tailwind CSS v4](https://tailwindcss.com/) pour un développement rapide et des variables CSS d'une grande flexibilité.
*   **Animations** : [Framer Motion](https://www.framer.com/motion/) pour orchestrer les micro-interactions et transitions.
*   **Icônes** : [Lucide React](https://lucide.dev/) pour un catalogue d'icônes vectorielles légères et cohérentes.

---

## 📁 Structure du Projet

```text
dentaire/
├── public/                 # Assets statiques (logos, images, icônes)
├── src/
│   ├── app/                # Configuration Next.js (App Router)
│   │   ├── favicon.ico
│   │   ├── globals.css     # Thème Tailwind CSS v4 & styles globaux
│   │   ├── layout.tsx      # Structure globale & configuration des polices Next Font
│   │   └── page.tsx        # Point d'entrée de l'application
│   └── components/         # Composants React modulaires
│       ├── Header.tsx      # Barre de navigation responsive avec menu tiroir mobile
│       ├── Hero.tsx        # Section d'accueil à fort impact visuel
│       ├── Services.tsx    # Grille asymétrique présentant les expertises médicales
│       ├── WhyVitalia.tsx  # Philosophie et points clés de réassurance
│       ├── LocationHours.tsx # Localisation, horaires 24h/7 et carte interactive
│       ├── BookingForm.tsx # Formulaire de réservation de consultation dynamique
│       ├── Footer.tsx      # Liens utiles, mentions légales & contacts rapides
│       └── WhatsAppButton.tsx # Boutons flottants d'accès rapide (Téléphone & WhatsApp)
├── eslint.config.mjs       # Configuration du linter ESLint
├── next.config.ts          # Options Next.js (React compiler, etc.)
├── package.json            # Dépendances & scripts du projet
├── postcss.config.mjs
└── tsconfig.json           # Configuration TypeScript
```

---

## 🛠️ Installation & Démarrage local

Pour exécuter le projet sur votre machine locale, suivez ces étapes :

### Prerrequis
Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée).

### 1. Cloner le projet ou naviguer dans le dossier
```bash
cd dentaire
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser le site.

### 4. Build de Production
Pour compiler l'application en vue d'une mise en production :
```bash
npm run build
```
Puis lancez le serveur de production localement :
```bash
npm run start
```

---

## 📄 Sections & Fonctionnalités Détaillées

### 1. En-tête (Header)
*   Menu collé au défilement (`sticky`) avec un effet de flou d'arrière-plan (`backdrop-blur`).
*   Bouton d'appel à l'action direct (CTA) pour la prise de rendez-vous.
*   Menu mobile entièrement animé (tiroir déroulant).

### 2. Bannière Principale (Hero)
*   Slogan fort et descriptif du positionnement premium du cabinet.
*   Intégration d'une image d'ambiance asymétrique avec des bordures géométriques subtiles.
*   Double CTA : Prise de rendez-vous en ligne et appel téléphonique immédiat.

### 3. Services & Expertises
*   Présentation des soins courants et spécialisés sous forme de cartes.
*   Mise en avant graphique des spécialités clés (Implants dentaires et Urgences 24h/7).
*   Effets de survol raffinés avec icônes dynamiques.

### 4. Notre Philosophie
*   Explication de la démarche clinique centrée sur le patient.
*   Quatre engagements fondamentaux (Équipe, Technologie, Écoute douce, Urgences).

### 5. Horaires & Accès
*   Informations claires sur le service de garde permanent (ouvert 24h/24 & 7j/7).
*   Encadré dédié aux urgences pour rassurer le patient en cas de crise.
*   Carte Google Maps intégrée avec filtre esthétique adouci (niveaux de gris).

### 6. Formulaire de Réservation
*   Saisie dynamique du nom, téléphone, type de traitement souhaité et remarques.
*   Validation visuelle et gestion des états de soumission (Chargement → Succès / Échec).
*   Lien d'appel d'urgence directement accessible.

### 7. Boutons de contact flottants
*   Boutons discrets fixes en bas à droite pour contacter le secrétariat en un clic via WhatsApp ou appel classique.

---

## 🔍 SEO & Bonnes Pratiques

Le site implémente nativement les standards SEO :
*   **Structure sémantique** claire avec des balises HTML5 appropriées (`<header>`, `<main>`, `<section>`, `<footer>`).
*   **Métadonnées riches** (titres, descriptions, mots-clés, auteurs) configurées pour le partage sur les réseaux sociaux (OpenGraph et Twitter Cards) dans `layout.tsx`.
*   **Balises de titre hiérarchisées** (un seul `h1` sur la page d'accueil, structure logique `h2` / `h3` / `h4`).
*   **Optimisation des images** via le composant `next/image` de Next.js pour un chargement ultra-rapide.
