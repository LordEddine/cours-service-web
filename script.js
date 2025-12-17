// ===================================
// QUIZ DATA
// ===================================

const quizData = [
    {
        question: "Quelle commande permet d'initialiser un projet Node.js ?",
        options: ["npm start", "npm init -y", "node init", "npm install"],
        correct: 1,
        explanation: "<code>npm init -y</code> crée automatiquement un fichier package.json avec les paramètres par défaut."
    },
    {
        question: "Quel avantage principal apporte TypeScript ?",
        options: ["Il rend le code plus rapide", "Il permet le typage statique", "Il remplace HTML", "Il fonctionne sans compilation"],
        correct: 1,
        explanation: "TypeScript ajoute un système de types statiques à JavaScript, permettant de détecter les erreurs lors du développement."
    },
    {
        question: "Dans Express, comment accéder aux paramètres d'URL (ex: /users/:id) ?",
        options: ["req.body", "req.query", "req.params", "req.url"],
        correct: 2,
        explanation: "<code>req.params</code> contient les paramètres de route nommés (comme :id)."
    },
    {
        question: "À quoi sert le fichier 'schema.prisma' ?",
        options: ["Configurer le serveur web", "Définir le modèle de données", "Gérer les styles CSS", "Compiler le TypeScript"],
        correct: 1,
        explanation: "Le fichier <code>schema.prisma</code> définit la structure de votre base de données (modèles, relations) et la configuration du générateur client."
    },
    {
        question: "Quelle commande Prisma synchronise le schéma avec la DB en développement ?",
        options: ["prisma db push", "prisma migrate deploy", "prisma generate", "prisma studios"],
        correct: 0,
        explanation: "<code>prisma db push</code> met à jour l'état de la base de données pour correspondre au schéma Prisma sans créer de fichier de migration (idéal pour le prototypage)."
    },
    {
        question: "Quelle est la structure correcte d'un JWT ?",
        options: ["Header.Body.Footer", "Header.Payload.Signature", "Token.Id.Key", "Start.Middle.End"],
        correct: 1,
        explanation: "Un JWT est composé de trois parties encodées en Base64URL : Header, Payload et Signature, séparées par des points."
    },
    {
        question: "Quel hook React est utilisé pour gérer l'état local ?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 1,
        explanation: "<code>useState</code> est le hook fondamental pour ajouter un état local réactif à un composant fonctionnel."
    },
    {
        question: "Comment exécuter un effet une seule fois au montage du composant ?",
        options: ["useEffect(fn)", "useEffect(fn, [prop])", "useEffect(fn, [])", "useState(fn)"],
        correct: 2,
        explanation: "Un tableau de dépendances vide <code>[]</code> indique à React d'exécuter l'effet uniquement après le premier rendu (montage)."
    },
    {
        question: "Quelle commande crée un projet React avec Vite et TypeScript ?",
        options: ["npm create-react-app", "npm init vite@latest", "npm install react", "npm create vite@latest -- --template react-ts"],
        correct: 3,
        explanation: "La commande complète spécifie le template <code>react-ts</code> pour configurer directement React avec TypeScript."
    },
    {
        question: "Pourquoi CORS est-il nécessaire ?",
        options: ["Pour crypter les données", "Pour autoriser les requêtes d'une autre origine", "Pour compresser les réponses", "Pour gérer les cookies"],
        correct: 1,
        explanation: "CORS permet au serveur d'indiquer quelles origines (domaines) sont autorisées à charger ses ressources (sécurité navigateur)."
    },
    {
        question: "Que retourne le hook useState ?",
        options: ["La valeur actuelle", "Une fonction de mise à jour", "Un tableau [valeur, setValeur]", "Un objet {valeur, setValeur}"],
        correct: 2,
        explanation: "<code>useState</code> retourne un tableau contenant exactement deux éléments : la valeur actuelle de l'état et la fonction pour la modifier."
    },
    {
        question: "Dans un composant React, où doit-on effectuer les appels API ?",
        options: ["Dans le render", "Dans useEffect", "Dans useState", "Dans le constructeur"],
        correct: 1,
        explanation: "Les appels API sont des effets de bord et doivent être effectués à l'intérieur de <code>useEffect</code> pour ne pas bloquer le rendu."
    },
    {
        question: "Quelle est l'extension de fichier pour un composant React avec TypeScript ?",
        options: [".js", ".ts", ".jsx", ".tsx"],
        correct: 3,
        explanation: "L'extension <code>.tsx</code> est requise pour utiliser la syntaxe JSX dans un fichier TypeScript."
    },
    {
        question: "Comment passer des données d'un parent à un enfant en React ?",
        options: ["Via le state", "Via les props", "Via le localStorage", "Via des variables globales"],
        correct: 1,
        explanation: "Les <strong>props</strong> (propriétés) sont le mécanisme standard pour transmettre des données d'un composant parent vers un enfant."
    },
    {
        question: "Quel status HTTP indique une création réussie (POST) ?",
        options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"],
        correct: 1,
        explanation: "Le code <strong>201 Created</strong> est la réponse standard pour indiquer qu'une ressource a été créée avec succès."
    }
];

// ===================================
// TOPIC MODAL CONTENT
// ===================================

const topicContent = {
    nodejs: {
        title: "🟢 Node.js",
        content: `
            <h2>Node.js</h2>
            <p><strong>Node.js</strong> est un environnement d'exécution JavaScript côté serveur, construit sur le moteur V8 de Google Chrome. Il permet d'exécuter du code JavaScript (et TypeScript compilé) en dehors du navigateur.</p>
            
            <h3>🔑 Caractéristiques Clés</h3>
            <table>
                <tr>
                    <th>Caractéristique</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><strong>Non-bloquant</strong></td>
                    <td>Utilise un modèle I/O asynchrone (event-driven)</td>
                </tr>
                <tr>
                    <td><strong>Single-threaded</strong></td>
                    <td>Un seul thread principal avec une boucle d'événements (Event Loop)</td>
                </tr>
                <tr>
                    <td><strong>NPM</strong></td>
                    <td>Gestionnaire de paquets avec +2 millions de packages</td>
                </tr>
                <tr>
                    <td><strong>Cross-platform</strong></td>
                    <td>Fonctionne sur Windows, macOS, Linux</td>
                </tr>
            </table>
            
            <h3>⚙️ Installation</h3>
            <pre><code># Vérifier si Node.js est installé
node --version
npm --version

# Télécharger depuis : https://nodejs.org (version LTS recommandée)</code></pre>
            
            <h3>📁 Initialisation d'un Projet</h3>
            <pre><code># Créer un dossier projet
mkdir mon-api
cd mon-api

# Initialiser le projet (crée package.json)
npm init -y</code></pre>

            <h3>📄 Ajouter le Script dans package.json</h3>
            <pre><code>{
  "type": "module",
  "scripts": {
    "dev": "node --import tsx src/server.ts"
  }
}</code></pre>
        `
    },
    typescript: {
        title: "🔷 TypeScript",
        content: `
            <h2>TypeScript</h2>
            <p><strong>TypeScript</strong> est un sur-ensemble typé de JavaScript développé par Microsoft. Il ajoute un système de types statiques qui permet de détecter les erreurs à la compilation plutôt qu'à l'exécution.</p>
            
            <h3>🔑 Avantages de TypeScript</h3>
            <table>
                <tr>
                    <th>Avantage</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><strong>Typage statique</strong></td>
                    <td>Détection des erreurs avant l'exécution</td>
                </tr>
                <tr>
                    <td><strong>Autocomplétion</strong></td>
                    <td>Meilleure expérience développeur (IntelliSense)</td>
                </tr>
                <tr>
                    <td><strong>Refactoring sûr</strong></td>
                    <td>Modifications de code plus sécurisées</td>
                </tr>
                <tr>
                    <td><strong>Documentation</strong></td>
                    <td>Les types servent de documentation</td>
                </tr>
                <tr>
                    <td><strong>Compatible JS</strong></td>
                    <td>Tout code JavaScript est valide en TypeScript</td>
                </tr>
            </table>
            
            <h3>⚙️ Installation</h3>
            <pre><code># Installer TypeScript et les types Node.js
npm install -D typescript @types/node

# Installer tsx pour exécuter directement du TypeScript
npm install -D tsx

# Initialiser TypeScript (crée tsconfig.json)
npx tsc --init</code></pre>
            
            <h3>📄 Configuration (tsconfig.json)</h3>
            <pre><code>{
  "compilerOptions": {
    "module": "esnext",
    "target": "ES2023",
    "moduleResolution": "bundler",
    "types": ["node"],
    "sourceMap": true,
    "declaration": true,
    "strict": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "skipLibCheck": true
  }
}</code></pre>
            
            <h3>📝 Types de Base</h3>
            <pre><code>// Types primitifs
let nom: string = "John";
let age: number = 25;
let estActif: boolean = true;

// Tableaux
let nombres: number[] = [1, 2, 3];
let noms: Array&lt;string&gt; = ["Alice", "Bob"];

// Objets
interface Utilisateur {
  id: string;
  email: string;
  nom?: string;  // Propriété optionnelle
}

// Type Union
let id: string | number = "abc123";

// Type Literal
type Role = "USER" | "ADMIN" | "MODERATOR";

// Enum
enum Priorite {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}</code></pre>

            <h3>📝 Fonctions Typées</h3>
            <pre><code>// Fonction avec types
function addition(a: number, b: number): number {
  return a + b;
}

// Arrow function typée
const multiplier = (a: number, b: number): number => a * b;

// Fonction async typée
async function fetchUser(id: string): Promise&lt;Utilisateur&gt; {
  // ...
}

// Paramètres optionnels et par défaut
function saluer(
  nom: string, 
  titre?: string, 
  ponctuation: string = "!"
): string {
  return \`Bonjour \${titre ? titre + " " : ""}\${nom}\${ponctuation}\`;
}</code></pre>
        `
    },
    express: {
        title: "🚂 Express.js",
        content: `
            <h2>Express.js</h2>
            <p><strong>Express.js</strong> est un framework web minimaliste et flexible pour Node.js. Il fournit des fonctionnalités robustes pour créer des applications web et des API REST.</p>
            
            <h3>🔑 Concepts Fondamentaux</h3>
            <p><strong>Middleware</strong> : Une fonction qui a accès à l'objet requête (req), l'objet réponse (res), et la fonction next().</p>
            <p><strong>Routing</strong> : Définit comment l'application répond aux requêtes client sur des endpoints spécifiques.</p>
            
            <h3>⚙️ Installation</h3>
            <pre><code># Express et ses types
npm install express
npm install -D @types/express</code></pre>
            
            <h3>📝 Configuration de Base (TypeScript)</h3>
            <pre><code>// src/server.ts
import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});</code></pre>
            
            <h3>🛤️ Les Méthodes HTTP (Verbes REST)</h3>
            <table>
                <tr>
                    <th>Méthode</th>
                    <th>Description</th>
                    <th>Exemple</th>
                </tr>
                <tr>
                    <td><code>GET</code></td>
                    <td>Récupérer des données</td>
                    <td><code>GET /api/users</code></td>
                </tr>
                <tr>
                    <td><code>POST</code></td>
                    <td>Créer une ressource</td>
                    <td><code>POST /api/users</code></td>
                </tr>
                <tr>
                    <td><code>PUT</code></td>
                    <td>Remplacer entièrement une ressource</td>
                    <td><code>PUT /api/users/1</code></td>
                </tr>
                <tr>
                    <td><code>PATCH</code></td>
                    <td>Modifier partiellement une ressource</td>
                    <td><code>PATCH /api/users/1</code></td>
                </tr>
                <tr>
                    <td><code>DELETE</code></td>
                    <td>Supprimer une ressource</td>
                    <td><code>DELETE /api/users/1</code></td>
                </tr>
            </table>

            <h3>📁 Structure de Projet Recommandée</h3>
            <pre><code>mon-api/
├── src/
│   ├── config/          # Configuration (DB, env)
│   ├── controllers/     # Logique des routes
│   ├── middlewares/     # Middlewares personnalisés
│   ├── routes/          # Définition des routes
│   ├── services/        # Logique métier
│   ├── types/           # Types et interfaces TypeScript
│   ├── utils/           # Utilitaires
│   └── server.ts        # Point d'entrée
├── prisma/
│   └── schema.prisma    # Schéma de la base de données
├── .env                 # Variables d'environnement
├── package.json
└── tsconfig.json</code></pre>

            <h3>🔄 Typage des Requêtes Express</h3>
            <pre><code>import { Request, Response, NextFunction } from 'express';

// Interface pour le body d'une requête
interface CreateUserBody {
  email: string;
  password: string;
  name: string;
}

// Interface pour les paramètres d'URL
interface UserParams {
  id: string;
}

// Controller typé
export const createUser = async (
  req: Request&lt;{}, {}, CreateUserBody&gt;,
  res: Response,
  next: NextFunction
): Promise&lt;void&gt; => {
  try {
    const { email, password, name } = req.body;
    // ...
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request&lt;UserParams&gt;,
  res: Response
): Promise&lt;void&gt; => {
  const { id } = req.params;
  // ...
};</code></pre>
        `
    },
    prisma: {
        title: "💎 Prisma ORM",
        content: `
            <h2>Prisma ORM</h2>
            <p><strong>Prisma</strong> est un ORM (Object-Relational Mapping) moderne pour Node.js et TypeScript. Il simplifie l'accès aux bases de données avec un client auto-généré et <strong>type-safe</strong>.</p>
            
            <h3>🔑 Composants de Prisma</h3>
            <table>
                <tr>
                    <th>Composant</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><strong>Prisma Client</strong></td>
                    <td>Client auto-généré et typé pour les requêtes DB</td>
                </tr>
                <tr>
                    <td><strong>Prisma Migrate</strong></td>
                    <td>Système de migrations de schéma</td>
                </tr>
                <tr>
                    <td><strong>Prisma Studio</strong></td>
                    <td>Interface graphique pour explorer les données</td>
                </tr>
                <tr>
                    <td><strong>Schema Prisma</strong></td>
                    <td>Fichier de définition du modèle de données</td>
                </tr>
            </table>
            
            <h3>⚙️ Installation</h3>
            <pre><code># Installer Prisma comme dépendance de développement
npm install -D prisma

# Installer le client Prisma
npm install @prisma/client
npm install @prisma/adapter-neon
npm install dotenv

# Initialiser Prisma
npx prisma init</code></pre>
            
            <h3>📄 Configuration du Schema (prisma/schema.prisma)</h3>
            <pre><code>generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

// ========================================
// MODÈLES
// ========================================

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String?
  role      Role     @default(USER)
  isActive  Boolean  @default(true) @map("is_active")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  // Relations
  posts     Post[]

  @@map("users")  // Nom de la table en DB
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  // Relation avec User
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId  String   @map("author_id")

  @@map("posts")
}

// ========================================
// ENUMS
// ========================================

enum Role {
  USER
  ADMIN
}</code></pre>
            
            <h3>🔑 Attributs Prisma Importants</h3>
            <table>
                <tr>
                    <th>Attribut</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>@id</code></td>
                    <td>Clé primaire</td>
                </tr>
                <tr>
                    <td><code>@unique</code></td>
                    <td>Valeur unique</td>
                </tr>
                <tr>
                    <td><code>@default()</code></td>
                    <td>Valeur par défaut</td>
                </tr>
                <tr>
                    <td><code>@updatedAt</code></td>
                    <td>Mise à jour automatique de la date</td>
                </tr>
                <tr>
                    <td><code>@relation()</code></td>
                    <td>Définit une relation</td>
                </tr>
                <tr>
                    <td><code>@map()</code></td>
                    <td>Nom de colonne personnalisé</td>
                </tr>
                <tr>
                    <td><code>@@map()</code></td>
                    <td>Nom de table personnalisé</td>
                </tr>
            </table>
            
            <h3>🔄 Commandes Prisma Essentielles</h3>
            <pre><code># Générer le client Prisma (après modification du schema)
npx prisma generate

# Synchroniser le schema avec la DB (développement)
npx prisma db push

# Créer une migration (production)
npx prisma migrate dev --name nom_migration

# Appliquer les migrations en production
npx prisma migrate deploy

# Ouvrir Prisma Studio (interface graphique)
npx prisma studio

# Réinitialiser la base de données
npx prisma migrate reset</code></pre>
            
            <h3>📝 Configuration du Client Prisma (utils/prisma.ts)</h3>
            <pre><code>// utils/prisma.ts
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from "../generated/prisma/client";
import dotenv from "dotenv";
dotenv.config();

// Créer le client Neon adapter
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

// Créer le client Prisma avec l'adaptateur Neon
const prisma = new PrismaClient({ 
  adapter,
  log: ['query', 'info', 'warn', 'error'],
});

export default prisma;</code></pre>

            <h3>🎮 Contrôleur Utilisateur (userController.ts)</h3>
            <pre><code>// controllers/userController.ts
import type { Request, Response } from 'express';
import prisma from '../utils/prisma';

interface UserParams {
  id: string;
}

interface CreateUserBody {
  email: string;
  password: string;
  name?: string;
}

// GET - Récupérer tous les utilisateurs
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise&lt;void&gt; => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true, createdAt: true }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// GET - Récupérer un utilisateur par ID
export const getUserById = async (
  req: Request&lt;UserParams&gt;,
  res: Response
): Promise&lt;void&gt; => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id }
    });
    if (!user) {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// POST - Créer un utilisateur
export const createUser = async (
  req: Request&lt;{}, {}, CreateUserBody&gt;,
  res: Response
): Promise&lt;void&gt; => {
  try {
    const { email, password, name } = req.body;
    const newUser = await prisma.user.create({
      data: { email, password, name }
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création' });
  }
};

// DELETE - Supprimer un utilisateur
export const deleteUser = async (
  req: Request&lt;UserParams&gt;,
  res: Response
): Promise&lt;void&gt; => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
};</code></pre>

            <h3>🛣️ Routes Utilisateur (userRoutes.ts)</h3>
            <pre><code>// routes/userRoutes.ts
import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = Router();

// GET /users - Récupérer tous les utilisateurs
router.get('/', getAllUsers);

// GET /users/:id - Récupérer un utilisateur par ID
router.get('/:id', getUserById);

// POST /users - Créer un utilisateur
router.post('/', createUser);

// PUT /users/:id - Mettre à jour un utilisateur
router.put('/:id', updateUser);

// DELETE /users/:id - Supprimer un utilisateur
router.delete('/:id', deleteUser);

export default router;</code></pre>

            <h3>🔍 Requêtes Prisma Typées (Exemples)</h3>
            <pre><code>// READ - Récupérer avec conditions et sélection
const activeUsers = await prisma.user.findMany({
  where: { isActive: true },
  select: { id: true, email: true, name: true }
});

// READ - Avec relations (include)
const userWithPosts = await prisma.user.findUnique({
  where: { id: 'user_id' },
  include: { posts: true }
});

// PAGINATION
const paginatedUsers = await prisma.user.findMany({
  skip: 0,    // Offset
  take: 10,   // Limit
  orderBy: { createdAt: 'desc' }
});

// COUNT
const totalUsers: number = await prisma.user.count({
  where: { isActive: true }
});</code></pre>
        `
    },
    neon: {
        title: "☁️ Neon PostgreSQL",
        content: `
            <h2>Neon (PostgreSQL Cloud)</h2>
            <p><strong>Neon</strong> est un service de base de données PostgreSQL serverless dans le cloud. Il offre une base de données PostgreSQL gratuite avec auto-scaling et branching.</p>
            
            <h3>🔑 Avantages de Neon</h3>
            <table>
                <tr>
                    <th>Avantage</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><strong>Serverless</strong></td>
                    <td>Pas de serveur à gérer</td>
                </tr>
                <tr>
                    <td><strong>Gratuit</strong></td>
                    <td>Plan gratuit généreux</td>
                </tr>
                <tr>
                    <td><strong>Auto-scaling</strong></td>
                    <td>S'adapte à la charge</td>
                </tr>
                <tr>
                    <td><strong>Branching</strong></td>
                    <td>Créer des copies de la DB pour les tests</td>
                </tr>
                <tr>
                    <td><strong>SSL inclus</strong></td>
                    <td>Connexion sécurisée par défaut</td>
                </tr>
            </table>
            
            <h3>⚙️ Configuration</h3>
            <h4>Étape 1 : Créer un compte</h4>
            <ol>
                <li>Aller sur <a href="https://neon.tech" target="_blank">neon.tech</a></li>
                <li>S'inscrire (GitHub, Google, ou email)</li>
            </ol>

            <h4>Étape 2 : Créer un projet</h4>
            <ol>
                <li>Cliquer sur "Create Project"</li>
                <li>Choisir un nom et une région proche</li>
            </ol>

            <h4>Étape 3 : Récupérer la Connection String</h4>
            <ol>
                <li>Dans le dashboard, copier la "Connection String"</li>
                <li>Elle ressemble à :</li>
            </ol>
            <pre><code>postgresql://username:password@ep-xxx-xxx-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require</code></pre>

            <h4>Étape 4 : Configurer le .env</h4>
            <pre><code>DATABASE_URL="postgresql://username:password@ep-xxx-xxx-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require"</code></pre>
            
            <p><strong>⚠️ IMPORTANT</strong> : Ne jamais commiter le fichier <code>.env</code> sur Git !</p>
        `
    },
    jwt: {
        title: "🔒 JWT (JSON Web Token)",
        content: `
            <h2>JWT (JSON Web Token)</h2>
            <p><strong>JWT</strong> (JSON Web Token) est un standard ouvert (RFC 7519) pour transmettre de manière sécurisée des informations entre parties sous forme d'objet JSON. Il est utilisé pour l'authentification et l'échange d'informations.</p>
            
            <h3>🔑 Structure d'un JWT</h3>
            <p>Un JWT se compose de 3 parties séparées par des points (.) :</p>
            <pre><code>xxxxx.yyyyy.zzzzz</code></pre>
            <table>
                <tr>
                    <th>Partie</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><strong>Header</strong></td>
                    <td>Type de token et algorithme de signature</td>
                </tr>
                <tr>
                    <td><strong>Payload</strong></td>
                    <td>Données (claims) encodées</td>
                </tr>
                <tr>
                    <td><strong>Signature</strong></td>
                    <td>Vérification de l'intégrité</td>
                </tr>
            </table>

            <h4>Exemple de Header</h4>
            <pre><code>{
  "alg": "HS256",
  "typ": "JWT"
}</code></pre>

            <h4>Exemple de Payload</h4>
            <pre><code>{
  "sub": "user_id_123",
  "email": "user@example.com",
  "role": "USER",
  "iat": 1516239022,
  "exp": 1516325422
}</code></pre>
            
            <h3>⚙️ Installation</h3>
            <pre><code>npm install jsonwebtoken bcrypt
npm install -D @types/jsonwebtoken @types/bcrypt</code></pre>

            <h3>📝 Configuration des variables d'environnement (.env)</h3>
            <pre><code>JWT_SECRET="votre_clef_secrete_ultra_complexe"
JWT_EXPIRES_IN="1h"
PORT=3000</code></pre>
            <p>Les secrets ne doivent JAMAIS être dans le code source.</p>

            <h3>Étape 1 — Création de l'application Express</h3>
            <pre><code>// src/server.ts 
import express from "express";
import authRoutes from "./routes/auth.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});</code></pre>

            <h3>Étape 2 — Création d'un token JWT (Controller)</h3>
            <pre><code>// src/controllers/auth.controller.ts
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

interface LoginBody {
  email: string;
  password: string;
}

export const login = (
  req: Request&lt;{}, {}, LoginBody&gt;,
  res: Response
): void => {
  const { email, password } = req.body;

  // Dans un vrai projet → vérifier en base de données
  if (email !== "test@example.com" || password !== "123456") {
    res.status(401).json({ message: "Identifiants invalides" });
    return;
  }

  const token = jwt.sign(
    {
      sub: "user_id_123",
      email: email,
      role: "user"
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: "api.monapp.com"
    }
  );

  res.json({ token });
};</code></pre>

            <h3>Étape 3 — Middleware d'authentification</h3>
            <pre><code>// src/middleware/auth.middleware.ts
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  sub: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Authorization manquante" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as TokenPayload;

    req.user = decoded; // Ajout sur req.user

    next();
  } catch (error) {
    res.status(401).json({ error: "Token invalide ou expiré" });
  }
};</code></pre>

            <h3>Étape 4 — Route protégée</h3>
            <pre><code>// src/routes/auth.routes.ts
import { Router } from "express";
import type { Request, Response } from "express";
import { login } from "../controllers/auth.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// Route publique - Connexion
router.post("/login", login);

// Route protégée - Profil utilisateur
router.get("/profile", authenticate, (req: Request, res: Response): void => {
  res.json({
    message: "Accès autorisé",
    user: req.user
  });
});

export default router;</code></pre>

            <h3>🔐 Flux d'Authentification</h3>
            <pre><code>┌─────────────┐      1. Login (email/password)      ┌─────────────┐
│   Client    │ ─────────────────────────────────▶  │   Serveur   │
│  (Frontend) │                                     │   (API)     │
└─────────────┘                                     └─────────────┘
       │                                                   │
       │         2. Vérification credentials               │
       │         3. Génération JWT                         │
       │                                                   │
       │      4. Retour du token                           │
       │  ◀─────────────────────────────────────────────  │
       │                                                   │
       │  5. Requêtes avec Header: Authorization: Bearer token
       │  ─────────────────────────────────────────────▶  │
       │         6. Vérification du token                  │
       │         7. Réponse                                │
       │  ◀─────────────────────────────────────────────  │</code></pre>
        `
    },
    cors: {
        title: "🌐 CORS",
        content: `
            <h2>CORS (Cross-Origin Resource Sharing)</h2>
            <p><strong>CORS</strong> (Cross-Origin Resource Sharing) est un mécanisme de sécurité des navigateurs qui contrôle les requêtes HTTP cross-origin (d'un domaine vers un autre).</p>
            
            <h3>🔑 Pourquoi CORS ?</h3>
            <p>Par défaut, les navigateurs bloquent les requêtes d'une origine vers une autre pour des raisons de sécurité (Same-Origin Policy). CORS permet d'autoriser certaines origines à accéder aux ressources.</p>
            
            <h3>Exemple de problème CORS</h3>
            <pre><code>Frontend : http://localhost:5173
Backend  : http://localhost:3000

❌ Sans CORS : Le navigateur bloque les requêtes du frontend vers le backend
✅ Avec CORS : Le backend autorise explicitement le frontend</code></pre>
            
            <h3>⚙️ Installation</h3>
            <pre><code>npm install cors
npm install -D @types/cors</code></pre>
            
            <h3>📝 Configuration (TypeScript)</h3>
            <pre><code>// src/app.ts
import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';

const app: Application = express();

// Configuration CORS
const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,  // Autorise les cookies
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));</code></pre>
            
            <h3>🔑 Options CORS Importantes</h3>
            <table>
                <tr>
                    <th>Option</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><code>origin</code></td>
                    <td>Origines autorisées (string, array, ou fonction)</td>
                </tr>
                <tr>
                    <td><code>credentials</code></td>
                    <td>Autorise l'envoi de cookies</td>
                </tr>
                <tr>
                    <td><code>methods</code></td>
                    <td>Méthodes HTTP autorisées</td>
                </tr>
                <tr>
                    <td><code>allowedHeaders</code></td>
                    <td>Headers autorisés dans les requêtes</td>
                </tr>
                <tr>
                    <td><code>exposedHeaders</code></td>
                    <td>Headers accessibles côté client</td>
                </tr>
                <tr>
                    <td><code>maxAge</code></td>
                    <td>Durée de cache du preflight (secondes)</td>
                </tr>
            </table>
        `
    },
    react: {
        title: "⚛️ React & Vite",
        content: `
            <h2>React & Vite</h2>
            <p><strong>React</strong> est une bibliothèque JavaScript pour créer des interfaces utilisateur, et <strong>Vite</strong> est un outil de build ultra-rapide.</p>
            
            <h3>🚀 Création du Projet</h3>
            <pre><code># Créer un projet React + TypeScript
npm create vite@latest mon-projet -- --template react-ts

# Installation
cd mon-projet
npm install

# Lancer le serveur de développement
npm run dev</code></pre>
            
            <h3>📦 Structure d'un Composant</h3>
            <p>Un composant est une fonction qui retourne du JSX (JavaScript XML).</p>
            <pre><code>// App.tsx
import { useState } from 'react';

function App() {
  return (
    &lt;div className="app"&gt;
      &lt;h1&gt;Bienvenue&lt;/h1&gt;
      &lt;Compteur depart={0} /&gt;
    &lt;/div&gt;
  );
}</code></pre>

            <h3>📝 Les Props Typées</h3>
            <pre><code>interface CarteProps {
  titre: string;
  contenu: string;
  estActif?: boolean; // Optionnel
}

function Carte({ titre, contenu, estActif = false }: CarteProps) {
  return (
    &lt;div style={{ opacity: estActif ? 1 : 0.5 }}&gt;
      &lt;h2&gt;{titre}&lt;/h2&gt;
      &lt;p&gt;{contenu}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
        `
    },
    hooks: {
        title: "🎣 React Hooks Standards",
        content: `
            <h2>React Hooks</h2>
            <p>Les <strong>Hooks</strong> sont des fonctions qui permettent d'utiliser l'état local et d'autres fonctionnalités de React sans écrire de classes. Ils doivent toujours être appelés au niveau supérieur d'un composant fonctionnel.</p>
            
            <h3>1. useState : Gestion de l'État</h3>
            <p><code>useState</code> permet de déclarer une variable d'état. Contrairement aux variables classiques, modifier le state déclenche un re-rendu du composant.</p>
            
            <h4>Syntaxe de base</h4>
            <pre><code>const [valeur, setValeur] = useState&lt;Type&gt;(etatInitial);</code></pre>
            
            <h4>Exemple 1 : Types Primitifs (Compteur)</h4>
            <pre><code>const [count, setCount] = useState&lt;number&gt;(0);

// Modification
&lt;button onClick={() => setCount(count + 1)}&gt;+1&lt;/button&gt;</code></pre>

            <h4>Exemple 2 : Objets (Formulaire)</h4>
            <p>Attention : React ne fusionne pas les objets automatiquement. Il faut utiliser le spread operator (<code>...prev</code>).</p>
            <pre><code>const [form, setForm] = useState({
  nom: '',
  email: ''
});

const handleChange = (e) => {
  setForm(prev => ({
    ...prev,              // Copie l'ancien état
    [e.target.name]: e.target.value // Modifie le champ ciblé
  }));
};</code></pre>

            <h4>Exemple 3 : Tableaux (Listes dynamiques)</h4>
            <pre><code>const [todos, setTodos] = useState&lt;string[]&gt;([]);

const ajouterTodo = (texte: string) => {
  // Créer un NOUVEAU tableau (immutabilité)
  setTodos(prev => [...prev, texte]);
};</code></pre>

            <h3>2. useEffect : Effets de Bord</h3>
            <p><code>useEffect</code> remplace les méthodes de cycle de vie ()<code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>).</p>
            
            <h4>Le Tableau de Dépendances (Le 2ème argument)</h4>
            <table>
                <tr>
                    <th>Dépendances</th>
                    <th>Comportement</th>
                    <th>Usage</th>
                </tr>
                <tr>
                    <td><code>[]</code> (Vide)</td>
                    <td>Exécuté <strong>une seule fois</strong> au montage</td>
                    <td>Appels API initiaux, Événements globaux</td>
                </tr>
                <tr>
                    <td><code>[prop, state]</code></td>
                    <td>Exécuté au montage <strong>ET</strong> quand une valeur change</td>
                    <td>Réagir à une modification (ex: recherche)</td>
                </tr>
                <tr>
                    <td>Pas de tableau</td>
                    <td>Exécuté à <strong>chaque rendu</strong></td>
                    <td>Rarement utilisé (danger de boucle infinie)</td>
                </tr>
            </table>

            <h4>Exemple 1 : Appel API au chargement</h4>
            <pre><code>useEffect(() => {
  const chargerDonnees = async () => {
    const data = await fetch('/api/users');
    // ...
  };
  chargerDonnees();
}, []); // &lt;-- Le tableau vide est crucial !</code></pre>

            <h4>Exemple 2 : Modification du Titre (Dépendance)</h4>
            <pre><code>const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Compteur : \${count}\`;
}, [count]); // Se relance uniquement si 'count' change</code></pre>

            <h4>Exemple 3 : Fonction de Nettoyage (Cleanup)</h4>
            <p>Essentiel pour éviter les fuites de mémoire (Timer, Event Listeners).</p>
            <pre><code>useEffect(() => {
  // 1. Mise en place
  const interval = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // 2. Nettoyage (Return function)
  return () => {
    clearInterval(interval);
    console.log('Nettoyage du timer');
  };
}, []);</code></pre>

            <h3>🔔 Règles d'Or des Hooks</h3>
            <ol>
                <li><strong>Top Level Only</strong> : Ne jamais appeler un Hook dans une boucle <code>for</code>, une condition <code>if</code> ou une fonction imbriquée.</li>
                <li><strong>React Functions Only</strong> : Appeler les Hooks uniquement depuis des composants React ou des Custom Hooks.</li>
            </ol>
        `
    },
    "frontend-backend": {
        title: "🔌 Connexion API",
        content: `
            <h2>Connexion React ↔ Express</h2>
            <p>Communication entre le frontend (React) et le backend (Express) via <strong>Fetch API</strong>.</p>
            
            <h3>📁 Configuration Globale</h3>
            <pre><code>// src/config/api.ts
export const API_URL = "http://localhost:3000/api";</code></pre>

            <h3>📡 Hook Personnalisé (useFetch)</h3>
            <pre><code>import { useState, useEffect } from 'react';

function useFetch&lt;T&gt;(url: string) {
  const [data, setData] = useState&lt;T | null&gt;(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState&lt;string | null&gt;(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}</code></pre>

            <h3>📨 Envoyer des Données (POST)</h3>
            <pre><code>const creerUtilisateur = async (user: UserData) => {
  try {
    const response = await fetch(\`\${API_URL}/users\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': \`Bearer \${token}\`
      },
      body: JSON.stringify(user)
    });
    
    if (response.ok) {
      alert("Utilisateur créé !");
    }
  } catch (error) {
    console.error("Erreur API:", error);
  }
};</code></pre>
        `
    }
};

// ===================================
// STATE MANAGEMENT
// ===================================

let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizCompleted = false;

// ===================================
// NAVIGATION
// ===================================

// Smooth scroll and active nav
document.addEventListener('DOMContentLoaded', () => {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
    
    // Initialize quiz
    loadQuestion();
    
    // Initialize checklist
    loadChecklistProgress();
    
    // Add checklist event listeners
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateChecklistProgress);
    });
});

// ===================================
// MODAL FUNCTIONS
// ===================================

function openModal(topic) {
    const modal = document.getElementById('topicModal');
    const modalBody = document.getElementById('modalBody');
    
    if (topicContent[topic]) {
        modalBody.innerHTML = topicContent[topic].content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('topicModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===================================
// QUIZ FUNCTIONS
// ===================================

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        return;
    }
    
    const question = quizData[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    
    const optionsHTML = question.options.map((option, index) => `
        <div class="option-item" onclick="selectOption(${index})">
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        </div>
    `).join('');
    
    quizContent.innerHTML = `
        <div class="question-card">
            <h3 class="question-text">${currentQuestionIndex + 1}. ${question.question}</h3>
            <div class="options-list">
                ${optionsHTML}
            </div>
        </div>
    `;
    
    updateProgress();
    updateButtons();
    
    // Restore previous answer if exists
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const options = document.querySelectorAll('.option-item');
        const userAnswer = userAnswers[currentQuestionIndex];
        
        options.forEach((opt, idx) => {
            opt.style.pointerEvents = 'none'; // Disable clicking
            
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === userAnswer) {
                opt.classList.add('incorrect');
            }
        });
        
        // Show explanation if available
        if (question.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation-box';
            explanationDiv.style.marginTop = '1.5rem';
            explanationDiv.style.padding = '1rem';
            explanationDiv.style.background = 'rgba(103, 126, 234, 0.1)';
            explanationDiv.style.borderLeft = '4px solid var(--accent-primary)';
            explanationDiv.style.borderRadius = '8px';
            explanationDiv.innerHTML = `
                <strong>💡 Explication :</strong><br>
                ${question.explanation}
            `;
            quizContent.appendChild(explanationDiv);
        }
    }
}

function selectOption(optionIndex) {
    if (quizCompleted) return;
    
    const question = quizData[currentQuestionIndex];
    const options = document.querySelectorAll('.option-item');
    
    // Check if already answered
    if (userAnswers[currentQuestionIndex] !== undefined) {
        return; // Don't allow changing answer
    }
    
    // Store answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Show feedback
    options.forEach((opt, idx) => {
        opt.style.pointerEvents = 'none'; // Disable clicking
        
        if (idx === question.correct) {
            // Always highlight the correct answer in green
            opt.classList.add('correct');
        } else if (idx === optionIndex) {
            // If user selected wrong answer, mark it red
            opt.classList.add('incorrect');
        }
    });
    
    // Update score if correct
    if (optionIndex === question.correct) {
        score++;
        document.getElementById('scoreValue').textContent = score;
    }
    
    // Show explanation if available
    if (question.explanation) {
        const quizContent = document.getElementById('quizContent');
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation-box';
        explanationDiv.style.marginTop = '1.5rem';
        explanationDiv.style.padding = '1rem';
        explanationDiv.style.background = 'rgba(103, 126, 234, 0.1)';
        explanationDiv.style.borderLeft = '4px solid var(--accent-primary)';
        explanationDiv.style.borderRadius = '8px';
        explanationDiv.innerHTML = `
            <strong>💡 Explication :</strong><br>
            ${question.explanation}
        `;
        quizContent.appendChild(explanationDiv);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Question ${currentQuestionIndex + 1} / ${quizData.length}`;
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? '0.5' : '1';
    
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

function submitQuiz() {
    quizCompleted = true;
    
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });
    
    // Show results
    const quizContainer = document.querySelector('.quiz-content');
    const quizActions = document.querySelector('.quiz-actions');
    const quizResults = document.getElementById('quizResults');
    const finalScore = document.getElementById('finalScore');
    const resultsMessage = document.getElementById('resultsMessage');
    
    quizContainer.style.display = 'none';
    quizActions.style.display = 'none';
    quizResults.style.display = 'block';
    
    const percentage = (score / quizData.length) * 100;
    finalScore.textContent = `${score} / ${quizData.length}`;
    
    let message = '';
    let icon = '🎉';
    
    if (percentage === 100) {
        message = 'Parfait ! Vous maîtrisez parfaitement le sujet !';
        icon = '🏆';
    } else if (percentage >= 80) {
        message = 'Excellent travail ! Vous avez une très bonne compréhension.';
        icon = '🎉';
    } else if (percentage >= 60) {
        message = 'Bien joué ! Continuez à réviser pour améliorer vos résultats.';
        icon = '👍';
    } else {
        message = 'Continuez vos efforts ! Relisez le cours et réessayez.';
        icon = '💪';
    }
    
    document.querySelector('.results-icon').textContent = icon;
    resultsMessage.textContent = message;
    
    // Update score display
    document.getElementById('scoreValue').textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    quizCompleted = false;
    
    const quizContainer = document.querySelector('.quiz-content');
    const quizActions = document.querySelector('.quiz-actions');
    const quizResults = document.getElementById('quizResults');
    
    quizContainer.style.display = 'block';
    quizActions.style.display = 'flex';
    quizResults.style.display = 'none';
    
    document.getElementById('scoreValue').textContent = '0';
    
    loadQuestion();
}

// ===================================
// CHECKLIST FUNCTIONS
// ===================================

function loadChecklistProgress() {
    const savedProgress = localStorage.getItem('checklistProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        progress.forEach((checked, index) => {
            const checkbox = document.getElementById(`check${index + 1}`);
            if (checkbox) {
                checkbox.checked = checked;
            }
        });
    }
    updateChecklistProgress();
}

function updateChecklistProgress() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const progress = Array.from(checkboxes).map(cb => cb.checked);
    
    // Save to localStorage
    localStorage.setItem('checklistProgress', JSON.stringify(progress));
    
    // Update display
    const completedCount = progress.filter(p => p).length;
    const totalCount = progress.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('completionPercent').textContent = percentage + '%';
}

// ===================================
// INTERSECTION OBSERVER (Animations)
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all topic cards
document.addEventListener('DOMContentLoaded', () => {
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});
