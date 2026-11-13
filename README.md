# FactoryPulse

Application web de suivi des machines d'une usine, développée avec React. FactoryPulse permet de consulter les indicateurs du parc, de rechercher des machines et de gérer leur statut depuis une interface en français.

## Fonctionnalités

- **Dashboard** : nombre total de machines, machines en fonctionnement et machines en panne.
- **Liste des machines** : identifiant, nom, zone et statut, avec une bordure colorée selon le statut.
- **Recherche et filtres** : recherche par nom, filtre par statut, réinitialisation et message lorsqu'aucun résultat n'est trouvé.
- **Modification** : changement du statut dans une fenêtre dédiée.
- **Suppression** : ouverture d'une fenêtre de confirmation avant suppression.
- **Ajout** : formulaire avec nom, zone, statut et production journalière, et génération d'un identifiant au format `M-001`.
- **Persistance** : sauvegarde des machines dans le `localStorage` du navigateur.

Statuts disponibles : `En fonctionnement`, `En panne` et `À l'arrêt`.

## Technologies

| Technologie | Utilisation |
| --- | --- |
| React 19 | Composants et état de l'interface |
| React Router 7 | Navigation entre les pages |
| Vite 8 | Développement et build |
| Tailwind CSS 4 | Styles |
| Oxlint | Analyse statique du code |

## Installation

Prérequis : Git, npm et une version de Node.js compatible avec Vite installé (`^20.19.0` ou `>=22.12.0`).

```bash
git clone https://github.com/abdessamadelouarrag/FactoryPulse-FrontEnd.git FactoryPulse
cd FactoryPulse/FrontEnd
npm install
npm run dev
```

Ouvrir l'adresse indiquée par Vite dans le terminal. **Au premier lancement, accéder à `/machines` pour initialiser les données avant de consulter le dashboard.** L'adresse par défaut est `http://localhost:5173/machines` ; le port peut changer s'il est déjà utilisé.

## Commandes

Exécuter les commandes depuis `FrontEnd`.

| Commande | Description |
| --- | --- |
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Générer la version de production dans `FrontEnd/dist` |
| `npm run preview` | Prévisualiser le build après `npm run build` |
| `npm run lint` | Analyser le code avec Oxlint |

## Pages

| Route | Page |
| --- | --- |
| `/` | Dashboard et indicateurs |
| `/machines` | Liste, filtres et gestion des machines |
| `/machines/new` | Formulaire d'ajout |

## Structure du projet

```text
FactoryPulse/
├── README.md
└── FrontEnd/
    ├── public/
    │   └── machines.json       # Données initiales : 8 machines
    ├── src/
    │   ├── assets/             # Images et ressources graphiques
    │   ├── components/
    │   │   ├── CartMachine.jsx # Carte d'une machine
    │   │   ├── Navbar.jsx      # Navigation
    │   │   ├── PopUp.jsx       # Modification du statut
    │   │   └── PopUpDelete.jsx # Confirmation de suppression
    │   ├── pages/
    │   │   ├── AddMachines.jsx
    │   │   ├── Dashboard.jsx
    │   │   └── Machines.jsx
    │   ├── App.jsx             # Routes
    │   ├── main.jsx            # Point d'entrée React
    │   ├── App.css
    │   └── index.css           # Styles globaux et Tailwind CSS
    ├── index.html
    ├── package.json
    └── vite.config.js
```

Les composants et les pages utilisent des noms de fichiers en PascalCase et l'extension `.jsx`. Les composants réutilisables sont placés dans `src/components`, les écrans associés aux routes dans `src/pages`.

## Données et sauvegarde

Au premier accès à la liste, l'application charge [`FrontEnd/public/machines.json`](FrontEnd/public/machines.json) avec `fetch`, puis enregistre les machines sous la clé `machines` du `localStorage`. Les visites suivantes réutilisent cette sauvegarde. Les ajouts, changements de statut et suppressions modifient les données du navigateur, sans modifier le fichier JSON.

Exemple de machine :

```json
{
  "id": "M-001",
  "name": "Robot de soudage",
  "zone": "Atelier A",
  "status": "En fonctionnement",
  "dailyProduction": 125
}
```

Les données sont propres au navigateur et à l'origine utilisée, y compris le port. Pour revenir aux huit machines initiales, supprimer la sauvegarde depuis la console du navigateur :

```javascript
localStorage.removeItem("machines");
```

Recharger ensuite `/machines` pour importer à nouveau le fichier initial.

## État actuel

Le dépôt contient une application côté navigateur, sans backend. Aucun script de tests automatisés n'est configuré.

Points restant à améliorer :

- Le dashboard peut provoquer une erreur si les données n'ont pas encore été initialisées via `/machines`.
- Les champs du formulaire, leur validation et la génération d'identifiants lorsque la liste est vide ou réordonnée doivent être fiabilisés.
- Le bouton d'annulation de la fenêtre de suppression ne ferme pas encore la fenêtre.
- La réinitialisation des filtres ne remet pas encore à zéro les valeurs visibles des champs.

## Jira et commits

Le projet est suivi dans [FactoryPulse — FC](https://abdessamad4804.atlassian.net/jira/software/projects/FC/boards/167/backlog).

Convention pour une tâche terminée : clé Jira au début et `#Done` à la fin du message.

```text
FC-123 Description du changement #Done
```
