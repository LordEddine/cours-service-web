# Guide Complet : React avec Vite et TypeScript

## Introduction

Ce document présente les étapes d'installation, de configuration et d'utilisation de React avec Vite et TypeScript. Vous apprendrez à maîtriser les hooks fondamentaux (`useState`, `useEffect`) et à connecter votre application frontend à une API backend Node.js/Express.

---

## Partie 1 : Installation et Configuration

### 1.1 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure) : environnement d'exécution JavaScript
- **npm** ou **yarn** : gestionnaire de paquets

Vérification de l'installation :

```bash
node --version
npm --version
```

### 1.2 Création du Projet

Utilisez la commande suivante pour créer un nouveau projet React avec Vite et TypeScript :

```bash
npm create vite@latest mon-projet -- --template react-ts
```

Cette commande :
- `npm create vite@latest` : utilise l'outil de création de Vite
- `mon-projet` : nom du dossier du projet
- `--template react-ts` : template React avec TypeScript

### 1.3 Installation des Dépendances

```bash
cd mon-projet
npm install
```

### 1.4 Lancement du Serveur de Développement

```bash
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173`

### 1.5 Structure du Projet

```
mon-projet/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx          # Composant principal
│   ├── App.css
│   ├── main.tsx         # Point d'entrée
│   ├── index.css
│   └── vite-env.d.ts    # Types Vite
├── index.html
├── package.json
├── tsconfig.json        # Configuration TypeScript
├── tsconfig.node.json
└── vite.config.ts       # Configuration Vite
```

### 1.6 Commandes Utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile l'application pour la production |
| `npm run preview` | Prévisualise la version de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## Partie 2 : Concepts Fondamentaux de React

### 2.1 Les Composants

Un **composant** est une fonction qui retourne du JSX (JavaScript XML). En TypeScript, on utilise l'extension `.tsx`.

```tsx
// Composant fonctionnel simple
function Bienvenue() {
  return <h1>Bienvenue sur mon application</h1>;
}

export default Bienvenue;
```

### 2.2 Les Props (Propriétés)

Les **props** permettent de passer des données d'un composant parent vers un composant enfant.

```tsx
// Définition du type des props
interface CarteUtilisateurProps {
  nom: string;
  age: number;
  email?: string; // Propriété optionnelle
}

// Composant avec props typées
function CarteUtilisateur({ nom, age, email }: CarteUtilisateurProps) {
  return (
    <div className="carte">
      <h2>{nom}</h2>
      <p>Âge : {age} ans</p>
      {email && <p>Email : {email}</p>}
    </div>
  );
}

// Utilisation
function App() {
  return (
    <CarteUtilisateur 
      nom="Ahmed" 
      age={22} 
      email="ahmed@email.com" 
    />
  );
}
```

---

## Partie 3 : Le Hook useState

### 3.1 Définition

`useState` est un hook qui permet de gérer l'**état local** d'un composant. L'état représente des données qui peuvent changer au cours du temps et qui, lorsqu'elles changent, provoquent un nouveau rendu du composant.

### 3.2 Syntaxe

```tsx
const [etat, setEtat] = useState<Type>(valeurInitiale);
```

- `etat` : la valeur actuelle de l'état
- `setEtat` : fonction pour modifier l'état
- `Type` : type TypeScript de l'état
- `valeurInitiale` : valeur de départ

### 3.3 Exemples Pratiques

#### Exemple 1 : Compteur Simple

```tsx
import { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState<number>(0);

  const incrementer = () => {
    setCompte(compte + 1);
  };

  const decrementer = () => {
    setCompte(compte - 1);
  };

  const reinitialiser = () => {
    setCompte(0);
  };

  return (
    <div>
      <h2>Compteur : {compte}</h2>
      <button onClick={incrementer}>+1</button>
      <button onClick={decrementer}>-1</button>
      <button onClick={reinitialiser}>Réinitialiser</button>
    </div>
  );
}

export default Compteur;
```

#### Exemple 2 : Gestion d'un Formulaire

```tsx
import { useState } from 'react';

interface Formulaire {
  nom: string;
  email: string;
  age: number;
}

function FormulaireInscription() {
  const [formulaire, setFormulaire] = useState<Formulaire>({
    nom: '',
    email: '',
    age: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulaire({
      ...formulaire,
      [name]: name === 'age' ? Number(value) : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données soumises :', formulaire);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          name="nom"
          value={formulaire.nom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formulaire.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Âge :</label>
        <input
          type="number"
          name="age"
          value={formulaire.age}
          onChange={handleChange}
        />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default FormulaireInscription;
```

#### Exemple 3 : Liste Dynamique

```tsx
import { useState } from 'react';

interface Tache {
  id: number;
  texte: string;
  terminee: boolean;
}

function ListeTaches() {
  const [taches, setTaches] = useState<Tache[]>([]);
  const [nouvelleTache, setNouvelleTache] = useState<string>('');

  const ajouterTache = () => {
    if (nouvelleTache.trim() === '') return;
    
    const tache: Tache = {
      id: Date.now(),
      texte: nouvelleTache,
      terminee: false
    };
    
    setTaches([...taches, tache]);
    setNouvelleTache('');
  };

  const toggleTache = (id: number) => {
    setTaches(taches.map(tache =>
      tache.id === id 
        ? { ...tache, terminee: !tache.terminee } 
        : tache
    ));
  };

  const supprimerTache = (id: number) => {
    setTaches(taches.filter(tache => tache.id !== id));
  };

  return (
    <div>
      <h2>Ma Liste de Tâches</h2>
      <div>
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={ajouterTache}>Ajouter</button>
      </div>
      <ul>
        {taches.map(tache => (
          <li key={tache.id}>
            <span 
              style={{ 
                textDecoration: tache.terminee ? 'line-through' : 'none' 
              }}
              onClick={() => toggleTache(tache.id)}
            >
              {tache.texte}
            </span>
            <button onClick={() => supprimerTache(tache.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;
```

---

## Partie 4 : Le Hook useEffect

### 4.1 Définition

`useEffect` est un hook qui permet d'exécuter des **effets de bord** dans les composants fonctionnels. Les effets de bord incluent les appels API, les abonnements, les modifications du DOM, les timers, etc.

### 4.2 Syntaxe

```tsx
useEffect(() => {
  // Code de l'effet
  
  return () => {
    // Fonction de nettoyage (optionnelle)
  };
}, [dependances]);
```

### 4.3 Les Trois Cas d'Utilisation

#### Cas 1 : Exécution à chaque rendu (sans tableau de dépendances)

```tsx
useEffect(() => {
  console.log('Exécuté à chaque rendu');
});
```

#### Cas 2 : Exécution une seule fois (tableau vide)

```tsx
useEffect(() => {
  console.log('Exécuté uniquement au montage du composant');
}, []);
```

#### Cas 3 : Exécution quand une dépendance change

```tsx
useEffect(() => {
  console.log('Exécuté quand "valeur" change');
}, [valeur]);
```

### 4.4 Exemples Pratiques

#### Exemple 1 : Titre de la Page Dynamique

```tsx
import { useState, useEffect } from 'react';

function TitreDynamique() {
  const [compteur, setCompteur] = useState<number>(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${compteur} fois`;
  }, [compteur]);

  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>
        Cliquer
      </button>
    </div>
  );
}

export default TitreDynamique;
```

#### Exemple 2 : Timer avec Nettoyage

```tsx
import { useState, useEffect } from 'react';

function Chronometre() {
  const [secondes, setSecondes] = useState<number>(0);
  const [actif, setActif] = useState<boolean>(false);

  useEffect(() => {
    let intervalle: number | undefined;

    if (actif) {
      intervalle = setInterval(() => {
        setSecondes(s => s + 1);
      }, 1000);
    }

    // Fonction de nettoyage
    return () => {
      if (intervalle) {
        clearInterval(intervalle);
      }
    };
  }, [actif]);

  const reinitialiser = () => {
    setActif(false);
    setSecondes(0);
  };

  return (
    <div>
      <h2>Chronomètre : {secondes}s</h2>
      <button onClick={() => setActif(!actif)}>
        {actif ? 'Pause' : 'Démarrer'}
      </button>
      <button onClick={reinitialiser}>Réinitialiser</button>
    </div>
  );
}

export default Chronometre;
```

#### Exemple 3 : Écoute des Événements du Clavier

```tsx
import { useState, useEffect } from 'react';

function DetecteurTouches() {
  const [touche, setTouche] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setTouche(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    // Nettoyage : retirer l'écouteur d'événement
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p>Dernière touche pressée : {touche || 'Aucune'}</p>
    </div>
  );
}

export default DetecteurTouches;
```

---

## Partie 5 : Connexion avec le Backend Node.js/Express

### 5.1 Configuration du Backend (Rappel)

Voici un exemple de serveur Express minimal :

```typescript
// server.ts
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Données simulées
interface Utilisateur {
  id: number;
  nom: string;
  email: string;
}

let utilisateurs: Utilisateur[] = [
  { id: 1, nom: 'Ahmed', email: 'ahmed@email.com' },
  { id: 2, nom: 'Fatima', email: 'fatima@email.com' }
];

// Routes
app.get('/api/utilisateurs', (req, res) => {
  res.json(utilisateurs);
});

app.get('/api/utilisateurs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const utilisateur = utilisateurs.find(u => u.id === id);
  
  if (utilisateur) {
    res.json(utilisateur);
  } else {
    res.status(404).json({ message: 'Utilisateur non trouvé' });
  }
});

app.post('/api/utilisateurs', (req, res) => {
  const nouvelUtilisateur: Utilisateur = {
    id: Date.now(),
    ...req.body
  };
  utilisateurs.push(nouvelUtilisateur);
  res.status(201).json(nouvelUtilisateur);
});

app.delete('/api/utilisateurs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  utilisateurs = utilisateurs.filter(u => u.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

### 5.2 Configuration de l'URL de l'API dans React

Créez un fichier de configuration pour centraliser l'URL de l'API :

```typescript
// src/config/api.ts
export const API_BASE_URL = 'http://localhost:3000/api';
```

### 5.3 Récupération des Données (GET)

#### Méthode avec fetch

```tsx
import { useState, useEffect } from 'react';
import { API_BASE_URL } from './config/api';

interface Utilisateur {
  id: number;
  nom: string;
  email: string;
}

function ListeUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([]);
  const [chargement, setChargement] = useState<boolean>(true);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/utilisateurs`);
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        
        const data: Utilisateur[] = await response.json();
        setUtilisateurs(data);
      } catch (err) {
        setErreur(err instanceof Error ? err.message : 'Erreur inconnue');
      } finally {
        setChargement(false);
      }
    };

    fetchUtilisateurs();
  }, []);

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {utilisateurs.map(user => (
          <li key={user.id}>
            {user.nom} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeUtilisateurs;
```

### 5.4 Envoi de Données (POST)

```tsx
import { useState } from 'react';
import { API_BASE_URL } from './config/api';

interface NouvelUtilisateur {
  nom: string;
  email: string;
}

function FormulaireAjout() {
  const [nom, setNom] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [enCours, setEnCours] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnCours(true);
    setMessage('');

    const nouvelUtilisateur: NouvelUtilisateur = { nom, email };

    try {
      const response = await fetch(`${API_BASE_URL}/utilisateurs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nouvelUtilisateur),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création');
      }

      const data = await response.json();
      setMessage(`Utilisateur créé avec l'ID : ${data.id}`);
      setNom('');
      setEmail('');
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setEnCours(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un Utilisateur</h2>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={enCours}>
        {enCours ? 'Envoi...' : 'Ajouter'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default FormulaireAjout;
```

### 5.5 Suppression de Données (DELETE)

```tsx
import { useState, useEffect } from 'react';
import { API_BASE_URL } from './config/api';

interface Utilisateur {
  id: number;
  nom: string;
  email: string;
}

function GestionUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([]);

  const fetchUtilisateurs = async () => {
    const response = await fetch(`${API_BASE_URL}/utilisateurs`);
    const data = await response.json();
    setUtilisateurs(data);
  };

  useEffect(() => {
    fetchUtilisateurs();
  }, []);

  const supprimerUtilisateur = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/utilisateurs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Mettre à jour l'état local
        setUtilisateurs(utilisateurs.filter(u => u.id !== id));
      }
    } catch (err) {
      console.error('Erreur lors de la suppression:', err);
    }
  };

  return (
    <div>
      <h2>Gestion des Utilisateurs</h2>
      <ul>
        {utilisateurs.map(user => (
          <li key={user.id}>
            {user.nom} - {user.email}
            <button onClick={() => supprimerUtilisateur(user.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GestionUtilisateurs;
```

### 5.6 Création d'un Hook Personnalisé pour les Requêtes API

Pour éviter la répétition de code, créez un hook personnalisé :

```tsx
// src/hooks/useFetch.ts
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  chargement: boolean;
  erreur: string | null;
  refetch: () => void;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [chargement, setChargement] = useState<boolean>(true);
  const [erreur, setErreur] = useState<string | null>(null);

  const fetchData = async () => {
    setChargement(true);
    setErreur(null);
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      
      const result: T = await response.json();
      setData(result);
    } catch (err) {
      setErreur(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setChargement(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, chargement, erreur, refetch: fetchData };
}

export default useFetch;
```

Utilisation du hook :

```tsx
import useFetch from './hooks/useFetch';
import { API_BASE_URL } from './config/api';

interface Utilisateur {
  id: number;
  nom: string;
  email: string;
}

function ListeAvecHook() {
  const { data, chargement, erreur, refetch } = useFetch<Utilisateur[]>(
    `${API_BASE_URL}/utilisateurs`
  );

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <div>
      <button onClick={refetch}>Rafraîchir</button>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeAvecHook;
```

---

## Partie 6 : Application Complète (CRUD)

Voici un exemple d'application complète avec toutes les opérations CRUD :

```tsx
// src/App.tsx
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000/api/utilisateurs';

interface Utilisateur {
  id: number;
  nom: string;
  email: string;
}

function App() {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([]);
  const [nom, setNom] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [editId, setEditId] = useState<number | null>(null);
  const [chargement, setChargement] = useState<boolean>(true);

  // Charger les utilisateurs au montage
  useEffect(() => {
    chargerUtilisateurs();
  }, []);

  const chargerUtilisateurs = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUtilisateurs(data);
    } catch (err) {
      console.error('Erreur:', err);
    } finally {
      setChargement(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editId) {
      // Mise à jour (PUT)
      await fetch(`${API_URL}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email }),
      });
    } else {
      // Création (POST)
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email }),
      });
    }

    // Réinitialiser et recharger
    setNom('');
    setEmail('');
    setEditId(null);
    chargerUtilisateurs();
  };

  const editer = (user: Utilisateur) => {
    setNom(user.nom);
    setEmail(user.email);
    setEditId(user.id);
  };

  const supprimer = async (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      chargerUtilisateurs();
    }
  };

  const annuler = () => {
    setNom('');
    setEmail('');
    setEditId(null);
  };

  if (chargement) return <p>Chargement...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Gestion des Utilisateurs</h1>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>
          {editId ? 'Mettre à jour' : 'Ajouter'}
        </button>
        {editId && (
          <button 
            type="button" 
            onClick={annuler}
            style={{ padding: '10px 20px', marginLeft: '10px' }}
          >
            Annuler
          </button>
        )}
      </form>

      {/* Liste */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Nom</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{user.nom}</td>
              <td style={{ padding: '10px' }}>{user.email}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                <button onClick={() => editer(user)}>Éditer</button>
                <button 
                  onClick={() => supprimer(user.id)}
                  style={{ marginLeft: '5px', color: 'red' }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

---

## Partie 7 : Bonnes Pratiques

### 7.1 Organisation des Fichiers

```
src/
├── components/         # Composants réutilisables
│   ├── Button.tsx
│   └── Input.tsx
├── pages/             # Pages/Vues principales
│   └── Home.tsx
├── hooks/             # Hooks personnalisés
│   └── useFetch.ts
├── services/          # Services API
│   └── api.ts
├── types/             # Types TypeScript
│   └── index.ts
├── config/            # Configuration
│   └── api.ts
└── App.tsx
```

### 7.2 Typage Strict

Toujours définir les types pour les props, l'état et les réponses API :

```typescript
// src/types/index.ts
export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  createdAt?: Date;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
```

### 7.3 Gestion des Erreurs

Toujours gérer les erreurs de manière appropriée :

```tsx
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  // ...
} catch (err) {
  if (err instanceof TypeError) {
    // Erreur réseau
    setErreur('Impossible de se connecter au serveur');
  } else {
    setErreur(err instanceof Error ? err.message : 'Erreur inconnue');
  }
}
```

---

## Résumé

| Concept | Description |
|---------|-------------|
| **Vite** | Outil de build rapide pour les projets React modernes |
| **TypeScript** | Superset de JavaScript avec typage statique |
| **Composant** | Fonction qui retourne du JSX |
| **Props** | Données passées d'un parent à un enfant |
| **useState** | Hook pour gérer l'état local d'un composant |
| **useEffect** | Hook pour gérer les effets de bord |
| **fetch** | API native pour les requêtes HTTP |
| **CORS** | Mécanisme de sécurité pour les requêtes cross-origin |

---

*Document préparé pour le cours de Développement Web - USTO Mohamed Boudiaf*