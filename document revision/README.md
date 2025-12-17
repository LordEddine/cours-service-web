# 📚 Révision Complète - Cours Service Web (TypeScript)

## College de Maisonneuve - Session 2025/2026

---

# 🎯 Table des Matières

1. [Node.js](#1-nodejs)
2. [TypeScript](#2-typescript)
3. [Express.js](#3-expressjs)
4. [Prisma ORM](#4-prisma-orm)
5. [Neon (PostgreSQL Cloud)](#5-neon-postgresql-cloud)
6. [JWT (JSON Web Token)](#6-jwt-json-web-token)
7. [CORS](#7-cors)
8. [Récapitulatif des Installations](#8-récapitulatif-des-installations)
9. [Exemple Pratique Complet](#9-exemple-pratique-complet)

---

# 1. Node.js

## 📖 Définition

**Node.js** est un environnement d'exécution JavaScript côté serveur, construit sur le moteur V8 de Google Chrome. Il permet d'exécuter du code JavaScript (et TypeScript compilé) en dehors du navigateur.

## 🔑 Caractéristiques Clés

| Caractéristique | Description |
|-----------------|-------------|
| **Non-bloquant** | Utilise un modèle I/O asynchrone (event-driven) |
| **Single-threaded** | Un seul thread principal avec une boucle d'événements (Event Loop) |
| **NPM** | Gestionnaire de paquets avec +2 millions de packages |
| **Cross-platform** | Fonctionne sur Windows, macOS, Linux |

## ⚙️ Installation

```bash
# Vérifier si Node.js est installé
node --version
npm --version

# Télécharger depuis : https://nodejs.org (version LTS recommandée)
```

## 📁 Initialisation d'un Projet

```bash
# Créer un dossier projet
mkdir mon-api
cd mon-api

# Initialiser le projet (crée package.json)
npm init -y
```
Il faut ajoute le script dans package.json :
```json
"dev": "node --import tsx src/server.ts"
```
---

# 2. TypeScript

## 📖 Définition

**TypeScript** est un sur-ensemble typé de JavaScript développé par Microsoft. Il ajoute un système de types statiques qui permet de détecter les erreurs à la compilation plutôt qu'à l'exécution.

## 🔑 Avantages de TypeScript

| Avantage | Description |
|----------|-------------|
| **Typage statique** | Détection des erreurs avant l'exécution |
| **Autocomplétion** | Meilleure expérience développeur (IntelliSense) |
| **Refactoring sûr** | Modifications de code plus sécurisées |
| **Documentation** | Les types servent de documentation |
| **Compatible JS** | Tout code JavaScript est valide en TypeScript |

## ⚙️ Installation

```bash
# Installer TypeScript et les types Node.js
npm install -D typescript @types/node

# Installer tsx pour exécuter directement du TypeScript
npm install -D tsx
```

## 🚀 Initialisation de TypeScript

```bash
# Initialiser TypeScript (crée tsconfig.json avec configuration par défaut)
npx tsc --init
```

## 📄 Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "ES2023",
    "moduleResolution": "bundler",
    "types": ["node"],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

## 🔑 Options Importantes du tsconfig.json

| Option | Description |
|--------|-------------|
| `target` | Version ECMAScript cible (ES2022 recommandé) |
| `module` | Système de modules (NodeNext pour Node.js moderne) |
| `strict` | Active toutes les vérifications strictes |
| `outDir` | Dossier de sortie des fichiers compilés |
| `rootDir` | Dossier source des fichiers TypeScript |
| `esModuleInterop` | Compatibilité avec les modules CommonJS |

## 📝 Types de Base

```typescript
// Types primitifs
let nom: string = "John";
let age: number = 25;
let estActif: boolean = true;

// Tableaux
let nombres: number[] = [1, 2, 3];
let noms: Array<string> = ["Alice", "Bob"];

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
}
```

## 📝 Fonctions Typées

```typescript
// Fonction avec types
function addition(a: number, b: number): number {
  return a + b;
}

// Arrow function typée
const multiplier = (a: number, b: number): number => a * b;

// Fonction async typée
async function fetchUser(id: string): Promise<Utilisateur> {
  // ...
}

// Paramètres optionnels et par défaut
function saluer(nom: string, titre?: string, ponctuation: string = "!"): string {
  return `Bonjour ${titre ? titre + " " : ""}${nom}${ponctuation}`;
}
```

---

# 3. Express.js

## 📖 Définition

**Express.js** est un framework web minimaliste et flexible pour Node.js. Il fournit des fonctionnalités robustes pour créer des applications web et des API REST.

## 🔑 Concepts Fondamentaux

### Middleware
Un **middleware** est une fonction qui a accès à l'objet requête (`req`), l'objet réponse (`res`), et la fonction `next()`.

### Routing
Le **routing** définit comment l'application répond aux requêtes client sur des endpoints spécifiques.

## ⚙️ Installation

```bash
# Express et ses types
npm install express
npm install -D @types/express

```

## 📝 Configuration de Base (TypeScript)

```typescript
// src/server.ts
import express from "express";

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```


## 🛤️ Les Méthodes HTTP (Verbes REST)

| Méthode | Description | Exemple |
|---------|-------------|---------|
| `GET` | Récupérer des données | `GET /api/users` |
| `POST` | Créer une ressource | `POST /api/users` |
| `PUT` | Remplacer entièrement une ressource | `PUT /api/users/1` |
| `PATCH` | Modifier partiellement une ressource | `PATCH /api/users/1` |
| `DELETE` | Supprimer une ressource | `DELETE /api/users/1` |

## 📁 Structure de Projet TypeScript Recommandée

```
mon-api/
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
├── dist/                # Fichiers compilés (généré)
├── .env                 # Variables d'environnement
├── .gitignore
├── package.json
└── tsconfig.json
```

## 🔄 Typage des Requêtes Express

```typescript
import { Request, Response, NextFunction } from 'express';

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

// Interface pour les query params
interface UserQuery {
  page?: string;
  limit?: string;
}

// Controller typé
export const createUser = async (
  req: Request<{}, {}, CreateUserBody>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password, name } = req.body;
    // ...
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request<UserParams>,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  // ...
};
```

---

# 4. Prisma ORM

## 📖 Définition

**Prisma** est un ORM (Object-Relational Mapping) moderne pour Node.js et TypeScript. Il simplifie l'accès aux bases de données avec un client auto-généré et **type-safe**.

## 🔑 Composants de Prisma

| Composant | Description |
|-----------|-------------|
| **Prisma Client** | Client auto-généré et typé pour les requêtes DB |
| **Prisma Migrate** | Système de migrations de schéma |
| **Prisma Studio** | Interface graphique pour explorer les données |
| **Schema Prisma** | Fichier de définition du modèle de données |

## ⚙️ Installation

```bash
# Installer Prisma comme dépendance de développement
npm install -D prisma

# Installer le client Prisma
npm install @prisma/client
npm install @prisma/adapter-neon
npm install dotenv
# Initialiser Prisma
npx prisma init
```

## 📄 Configuration du Schema (prisma/schema.prisma)

```prisma
// prisma/schema.prisma

generator client {
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
}
```

## 🔑 Attributs Prisma Importants

| Attribut | Description |
|----------|-------------|
| `@id` | Clé primaire |
| `@unique` | Valeur unique |
| `@default()` | Valeur par défaut |
| `@updatedAt` | Mise à jour automatique de la date |
| `@relation()` | Définit une relation |
| `@map()` | Nom de colonne personnalisé |
| `@@map()` | Nom de table personnalisé |

## 🔄 Commandes Prisma Essentielles

```bash
# Générer le client Prisma (après modification du schema)
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
npx prisma migrate reset
```

## 📝 Configuration du Client Prisma (TypeScript)

```typescript
// utils/prisma.ts
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

export default prisma;
```

## 🎮 Contrôleur Utilisateur (userController.ts)

```typescript
// controllers/userController.ts
import type { Request, Response } from 'express';
import prisma from '../utils/prisma';

// Interface pour typer les paramètres d'URL
interface UserParams {
  id: string;
}

// Interface pour typer le body de création
interface CreateUserBody {
  email: string;
  password: string;
  name?: string;
}

// Interface pour typer le body de mise à jour
interface UpdateUserBody {
  email?: string;
  name?: string;
}

// GET - Récupérer tous les utilisateurs
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
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
  req: Request<UserParams>,
  res: Response
): Promise<void> => {
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
  req: Request<{}, {}, CreateUserBody>,
  res: Response
): Promise<void> => {
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

// PUT - Mettre à jour un utilisateur
export const updateUser = async (
  req: Request<UserParams, {}, UpdateUserBody>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { email, name } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { email, name }
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour' });
  }
};

// DELETE - Supprimer un utilisateur
export const deleteUser = async (
  req: Request<UserParams>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
};
```

## 🔍 Requêtes Prisma Typées (Exemples)

```typescript
// Exemples de requêtes Prisma avancées

// READ - Récupérer avec conditions et sélection
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
});
```

## 🛣️ Routes Utilisateur (userRoutes.ts)

```typescript
// routes/userRoutes.ts
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

export default router;
```

### 📌 Intégration dans app.ts / index.ts

```typescript
// src/index.ts ou src/app.ts
import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

// Monter les routes utilisateur sur /users
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
```

---

# 5. Neon (PostgreSQL Cloud)

## 📖 Définition

**Neon** est un service de base de données PostgreSQL serverless dans le cloud. Il offre une base de données PostgreSQL gratuite avec auto-scaling et branching.

## 🔑 Avantages de Neon

| Avantage | Description |
|----------|-------------|
| **Serverless** | Pas de serveur à gérer |
| **Gratuit** | Plan gratuit généreux |
| **Auto-scaling** | S'adapte à la charge |
| **Branching** | Créer des copies de la DB pour les tests |
| **SSL inclus** | Connexion sécurisée par défaut |

## ⚙️ Configuration

### Étape 1 : Créer un compte
1. Aller sur [neon.tech](https://neon.tech)
2. S'inscrire (GitHub, Google, ou email)

### Étape 2 : Créer un projet
1. Cliquer sur "Create Project"
2. Choisir un nom et une région proche

### Étape 3 : Récupérer la Connection String
1. Dans le dashboard, copier la "Connection String"
2. Elle ressemble à :

```
postgresql://username:password@ep-xxx-xxx-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require
```

### Étape 4 : Configurer le .env

```env
DATABASE_URL="postgresql://username:password@ep-xxx-xxx-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require"
```

> ⚠️ **IMPORTANT** : Ne jamais commiter le fichier `.env` sur Git !

---

# 6. JWT (JSON Web Token)

## 📖 Définition

**JWT** (JSON Web Token) est un standard ouvert (RFC 7519) pour transmettre de manière sécurisée des informations entre parties sous forme d'objet JSON. Il est utilisé pour l'authentification et l'échange d'informations.

## 🔑 Structure d'un JWT

Un JWT se compose de 3 parties séparées par des points (`.`) :

```
xxxxx.yyyyy.zzzzz
```

| Partie | Description |
|--------|-------------|
| **Header** | Type de token et algorithme de signature |
| **Payload** | Données (claims) encodées |
| **Signature** | Vérification de l'intégrité |

### Exemple de Header
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Exemple de Payload
```json
{
  "sub": "user_id_123",
  "email": "user@example.com",
  "role": "USER",
  "iat": 1516239022,
  "exp": 1516325422
}
```

## ⚙️ Installation

```bash
npm install jsonwebtoken bcrypt
npm install -D @types/jsonwebtoken @types/bcrypt
```

## 📝 Types pour JWT

```typescript
// src/types/auth.types.ts

export interface JwtPayload {
  sub: string;      // Subject (user ID)
  email: string;
  role: string;
  iat?: number;     // Issued at
  exp?: number;     // Expiration
}

export interface TokenResponse {
  accessToken: string;
  expiresIn: string;
}
```
## Configuration des variables d'environnement
Créer un fichier .env :
```python
JWT_SECRET="votre_clef_secrete_ultra_complexe"
JWT_EXPIRES_IN="1h"
PORT=3000
```
Les secrets ne doivent JAMAIS être dans le code source.
.env permet de :
- stocker la clé secrète JWT,
- gérer la durée d’expiration,
- configurer le port.

Charger dans server.ts :
```typescript
import dotenv from "dotenv";
dotenv.config();

```


## Étape 1 — Création de l’application Express

```typescript
// src/server.ts 
import express from "express";
import authRoutes from "./routes/auth.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

```

## Étape 2 — Création d’un token JWT (Controller)

```typescript
// src/controllers/auth.controller.ts
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

// Interface pour typer le body de login
interface LoginBody {
  email: string;
  password: string;
}

export const login = (
  req: Request<{}, {}, LoginBody>,
  res: Response
): void => {
  const { email, password } = req.body;

  // Dans un vrai projet --> vérifier en base de données
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
};

```
## Étape 3 — Middleware d’authentification
```typescript
// src/middleware/auth.middleware.ts

import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Interface pour le payload du token
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

    req.user = decoded; // Ajout sur req.user → défini dans express.d.ts

    next();
  } catch (error) {
    res.status(401).json({ error: "Token invalide ou expiré" });
  }
};

```
## Étape 4 — Route protégée avec TypeScript
```typescript
// src/routes/auth.routes.ts
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

export default router;

```
## Étape 5 — Extending Request pour req.user

```typescript
// src/types/express.d.ts

// Interface pour le payload utilisateur
interface UserPayload {
  sub: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

declare namespace Express {
  export interface Request {
    user?: UserPayload;
  }
}

```
TypeScript ne connaît pas req.user.

Dans tsconfig.json, ajouter :
```json
{
  "compilerOptions": {
    ...
    "typeRoots": ["./src/types", "./node_modules/@types"]
  }
}

```
## Résultat — Tester avec un client HTTP
Connexion
```rest
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}
```

## 🔐 Flux d'Authentification

```
┌─────────────┐      1. Login (email/password)      ┌─────────────┐
│   Client    │ ─────────────────────────────────▶  │   Serveur   │
│  (Frontend) │                                     │   (API)     │
└─────────────┘                                     └─────────────┘
       │                                                   │
       │         2. Vérification credentials               │
       │                                                   │
       │         3. Génération JWT                         │
       │                                                   │
       │      4. Retour du token                           │
       │  ◀─────────────────────────────────────────────  │
       │                                                   │
       │  5. Requêtes avec Header: Authorization: Bearer token
       │  ─────────────────────────────────────────────▶  │
       │                                                   │
       │         6. Vérification du token                  │
       │         7. Réponse                                │
       │  ◀─────────────────────────────────────────────  │
```

---

# 7. CORS

## 📖 Définition

**CORS** (Cross-Origin Resource Sharing) est un mécanisme de sécurité des navigateurs qui contrôle les requêtes HTTP cross-origin (d'un domaine vers un autre).

## 🔑 Pourquoi CORS ?

Par défaut, les navigateurs bloquent les requêtes d'une origine vers une autre pour des raisons de sécurité (Same-Origin Policy). CORS permet d'autoriser certaines origines à accéder aux ressources.

### Exemple de problème CORS

```
Frontend : http://localhost:5173
Backend  : http://localhost:3000

❌ Sans CORS : Le navigateur bloque les requêtes du frontend vers le backend
✅ Avec CORS : Le backend autorise explicitement le frontend
```

## ⚙️ Installation

```bash
npm install cors
npm install -D @types/cors
```

## 📝 Configuration (TypeScript)

```typescript
// src/app.ts
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

app.use(cors(corsOptions));
```

## 🔑 Options CORS Importantes

| Option | Description |
|--------|-------------|
| `origin` | Origines autorisées (string, array, ou fonction) |
| `credentials` | Autorise l'envoi de cookies |
| `methods` | Méthodes HTTP autorisées |
| `allowedHeaders` | Headers autorisés dans les requêtes |
| `exposedHeaders` | Headers accessibles côté client |
| `maxAge` | Durée de cache du preflight (secondes) |

---

# 8. Récapitulatif des Installations

## 📦 Commandes d'Installation Complètes

```bash
# 1. Créer et initialiser le projet
mkdir mon-api
cd mon-api
npm init -y

# 2. Installer les dépendances de production
npm install express cors dotenv jsonwebtoken bcryptjs @prisma/client @prisma/adapter-neon

# 3. Installer les dépendances de développement (TypeScript)
npm install -D typescript @types/node @types/express @types/cors @types/jsonwebtoken @types/bcryptjs
npm install -D prisma tsx nodemon

# 4. Initialiser TypeScript
npx tsc --init

# 5. Initialiser Prisma
npx prisma init
```

## 📄 Fichier .env

```env
# Serveur
PORT=3000
NODE_ENV=development

# Base de données (Neon)
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# JWT
JWT_SECRET=votre_secret_super_securise_32_caracteres_minimum
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:5173
```

## 📄 Fichier .gitignore

```gitignore
# Dépendances
node_modules/

# Build
dist/

# Variables d'environnement
.env
.env.local
.env.production

# Logs
*.log

# Système
.DS_Store
```

## 📄 Package.json Scripts

```json
{
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "node --import tsx --watch src/server.ts",
    "db:push": "npx prisma db push",
    "db:studio": "npx prisma studio",
    "db:generate": "npx prisma generate"
  }
}
```

> 💡 **Note** : L'option `--watch` (Node.js 18+) redémarre automatiquement le serveur lors de modifications des fichiers.

---

# 9. Exemple Pratique Complet

## 🎯 Projet : API de Gestion de Tâches (Todo API) - TypeScript

### Structure du Projet

```
todo-api/
├── src/
│   ├── config/
│   │   └── prisma.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   └── todo.controller.ts
│   ├── middlewares/
│   │   └── auth.middleware.ts
│   ├── routes/
│   │   ├── index.ts
│   │   ├── auth.routes.ts
│   │   └── todo.routes.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── jwt.utils.ts
│   ├── app.ts
│   └── server.ts
├── prisma/
│   └── schema.prisma
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

---

### Étape 1 : Initialisation

```bash
mkdir todo-api
cd todo-api
npm init -y

# Dépendances de production
npm install express cors dotenv jsonwebtoken bcryptjs @prisma/client @prisma/adapter-neon

# Dépendances de développement
npm install -D typescript @types/node @types/express @types/cors @types/jsonwebtoken @types/bcryptjs
npm install -D prisma tsx

# Initialiser TypeScript
npx tsc --init

# Initialiser Prisma
npx prisma init
```

---

### Étape 2 : Configuration TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

### Étape 3 : Configuration Package.json

```json
{
  "name": "todo-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "node --import tsx --watch src/server.ts",
    "db:push": "npx prisma db push",
    "db:studio": "npx prisma studio",
    "db:generate": "npx prisma generate"
  }
}
```

> 💡 **Note** : L'option `--watch` redémarre automatiquement le serveur lors de modifications.

---

### Étape 4 : Schema Prisma

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  isActive  Boolean  @default(true) @map("is_active")
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  todos     Todo[]

  @@map("users")
}

model Todo {
  id          String   @id @default(cuid())
  title       String
  description String?
  completed   Boolean  @default(false)
  priority    Priority @default(MEDIUM)
  dueDate     DateTime? @map("due_date")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId      String   @map("user_id")

  @@map("todos")
}

enum Priority {
  LOW
  MEDIUM
  HIGH
}
```

---

### Étape 5 : Variables d'Environnement (.env)

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
JWT_SECRET=mon_secret_jwt_super_securise_2024_typescript
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
```

---

### Étape 6 : Types et Interfaces

```typescript
// src/types/index.ts
import { User, Todo } from '@prisma/client';

// Types pour les réponses API
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Type utilisateur sans le mot de passe
export type SafeUser = Omit<User, 'password'>;

// Types pour l'authentification
export interface RegisterBody {
  email: string;
  password: string;
  name: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: SafeUser;
  token: string;
}

// Types pour les todos
export interface CreateTodoBody {
  title: string;
  description?: string;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate?: string;
}

export interface UpdateTodoBody {
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate?: string;
}

// Extension de Express Request
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
```

---

### Étape 7 : Configuration Prisma

```typescript
// src/config/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'info', 'warn', 'error'] 
    : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
```

---

### Étape 8 : Utilitaires JWT

```typescript
// src/utils/jwt.utils.ts
import jwt, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export interface TokenPayload {
  sub: string;
  email: string;
}

export const generateToken = (payload: TokenPayload): string => {
  const options: SignOptions = { expiresIn: JWT_EXPIRES_IN };
  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
};
```

---

### Étape 9 : Middleware d'Authentification

```typescript
// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils.js';
import prisma from '../config/prisma.js';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'Token manquant'
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      res.status(401).json({
        success: false,
        message: 'Token invalide ou expiré'
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.sub }
    });

    if (!user || !user.isActive) {
      res.status(401).json({
        success: false,
        message: 'Utilisateur non trouvé ou désactivé'
      });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
};
```

---

### Étape 10 : Controllers

```typescript
// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../config/prisma.js';
import { generateToken } from '../utils/jwt.utils.js';
import { RegisterBody, LoginBody, ApiResponse, AuthResponse, SafeUser } from '../types/index.js';

// Inscription
export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response<ApiResponse<AuthResponse>>
): Promise<void> => {
  try {
    const { email, password, name } = req.body;

    // Vérifier si l'utilisateur existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'Cet email est déjà utilisé'
      });
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l'utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });

    // Générer le token
    const token = generateToken({ sub: user.id, email: user.email });

    // Préparer la réponse sans le mot de passe
    const safeUser: SafeUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    res.status(201).json({
      success: true,
      message: 'Inscription réussie',
      data: { user: safeUser, token }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};

// Connexion
export const login = async (
  req: Request<{}, {}, LoginBody>,
  res: Response<ApiResponse<AuthResponse>>
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Trouver l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
      return;
    }

    // Vérifier le mot de passe
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
      return;
    }

    // Générer le token
    const token = generateToken({ sub: user.id, email: user.email });

    // Préparer la réponse sans le mot de passe
    const safeUser: SafeUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    res.json({
      success: true,
      message: 'Connexion réussie',
      data: { user: safeUser, token }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};

// Profil utilisateur
export const getProfile = async (
  req: Request,
  res: Response<ApiResponse<SafeUser>>
): Promise<void> => {
  const user = req.user!;
  
  res.json({
    success: true,
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  });
};
```

```typescript
// src/controllers/todo.controller.ts
import { Request, Response } from 'express';
import prisma from '../config/prisma.js';
import { Todo } from '@prisma/client';
import { CreateTodoBody, UpdateTodoBody, ApiResponse } from '../types/index.js';

// Récupérer toutes les tâches de l'utilisateur
export const getTodos = async (
  req: Request,
  res: Response<ApiResponse<Todo[]>>
): Promise<void> => {
  try {
    const todos = await prisma.todo.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};

// Récupérer une tâche par ID
export const getTodoById = async (
  req: Request<{ id: string }>,
  res: Response<ApiResponse<Todo>>
): Promise<void> => {
  try {
    const { id } = req.params;

    const todo = await prisma.todo.findFirst({
      where: { id, userId: req.user!.id }
    });

    if (!todo) {
      res.status(404).json({
        success: false,
        message: 'Tâche non trouvée'
      });
      return;
    }

    res.json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};

// Créer une tâche
export const createTodo = async (
  req: Request<{}, {}, CreateTodoBody>,
  res: Response<ApiResponse<Todo>>
): Promise<void> => {
  try {
    const { title, description, priority, dueDate } = req.body;

    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        priority: priority || 'MEDIUM',
        dueDate: dueDate ? new Date(dueDate) : null,
        userId: req.user!.id
      }
    });

    res.status(201).json({
      success: true,
      message: 'Tâche créée avec succès',
      data: todo
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};

// Mettre à jour une tâche
export const updateTodo = async (
  req: Request<{ id: string }, {}, UpdateTodoBody>,
  res: Response<ApiResponse<Todo>>
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, completed, priority, dueDate } = req.body;

    // Vérifier que la tâche appartient à l'utilisateur
    const existingTodo = await prisma.todo.findFirst({
      where: { id, userId: req.user!.id }
    });

    if (!existingTodo) {
      res.status(404).json({
        success: false,
        message: 'Tâche non trouvée'
      });
      return;
    }

    const todo = await prisma.todo.update({
      where: { id },
      data: {
        title,
        description,
        completed,
        priority,
        dueDate: dueDate ? new Date(dueDate) : undefined
      }
    });

    res.json({
      success: true,
      message: 'Tâche mise à jour',
      data: todo
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};

// Supprimer une tâche
export const deleteTodo = async (
  req: Request<{ id: string }>,
  res: Response<ApiResponse>
): Promise<void> => {
  try {
    const { id } = req.params;

    // Vérifier que la tâche appartient à l'utilisateur
    const existingTodo = await prisma.todo.findFirst({
      where: { id, userId: req.user!.id }
    });

    if (!existingTodo) {
      res.status(404).json({
        success: false,
        message: 'Tâche non trouvée'
      });
      return;
    }

    await prisma.todo.delete({ where: { id } });

    res.json({
      success: true,
      message: 'Tâche supprimée avec succès'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};

// Basculer le statut d'une tâche
export const toggleTodo = async (
  req: Request<{ id: string }>,
  res: Response<ApiResponse<Todo>>
): Promise<void> => {
  try {
    const { id } = req.params;

    const existingTodo = await prisma.todo.findFirst({
      where: { id, userId: req.user!.id }
    });

    if (!existingTodo) {
      res.status(404).json({
        success: false,
        message: 'Tâche non trouvée'
      });
      return;
    }

    const todo = await prisma.todo.update({
      where: { id },
      data: { completed: !existingTodo.completed }
    });

    res.json({
      success: true,
      message: todo.completed ? 'Tâche complétée' : 'Tâche réouverte',
      data: todo
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Erreur serveur' 
    });
  }
};
```

---

### Étape 11 : Routes

```typescript
// src/routes/auth.routes.ts
import { Router } from 'express';
import { register, login, getProfile } from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticate, getProfile);

export default router;
```

```typescript
// src/routes/todo.routes.ts
import { Router } from 'express';
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo
} from '../controllers/todo.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

// Toutes les routes nécessitent une authentification
router.use(authenticate);

router.get('/', getTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id/toggle', toggleTodo);

export default router;
```

```typescript
// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './auth.routes.js';
import todoRoutes from './todo.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/todos', todoRoutes);

export default router;
```

---

### Étape 12 : Application Express

```typescript
// src/app.ts
import express, { Application, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app: Application = express();

// Configuration CORS
const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de santé
app.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Todo API TypeScript - Bienvenue !',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      todos: '/api/todos'
    }
  });
});

// Routes API
app.use('/api', routes);

// Gestion des erreurs 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route non trouvée'
  });
});

export default app;
```

---

### Étape 13 : Point d'Entrée

```typescript
// src/server.ts
import app from './app.js';
import prisma from './config/prisma.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
  try {
    // Vérifier la connexion à la base de données
    await prisma.$connect();
    console.log('✅ Connexion à la base de données établie');

    app.listen(PORT, () => {
      console.log(`
  ╔═══════════════════════════════════════════════╗
  ║     🚀 Todo API TypeScript - Démarré          ║
  ╠═══════════════════════════════════════════════╣
  ║  URL: http://localhost:${PORT}                   ║
  ║  Mode: ${process.env.NODE_ENV || 'development'}                          ║
  ╚═══════════════════════════════════════════════╝
      `);
    });
  } catch (error) {
    console.error('❌ Erreur lors du démarrage:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

// Gestion de l'arrêt propre
const shutdown = async (): Promise<void> => {
  console.log('\n🛑 Arrêt du serveur...');
  await prisma.$disconnect();
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

startServer();
```

---

### Étape 14 : Lancer le Projet

```bash
# 1. Synchroniser la base de données
npx prisma db push

# 2. Générer le client Prisma
npx prisma generate

# 3. Lancer en mode développement
npm run dev
```

---

## 🧪 Tests avec Postman

### 1. Inscription
```http
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "motdepasse123",
  "name": "John Doe"
}
```

### 2. Connexion
```http
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "motdepasse123"
}
```

### 3. Créer une Tâche (avec token)
```http
POST http://localhost:3000/api/todos
Content-Type: application/json
Authorization: Bearer <votre_token>

{
  "title": "Apprendre TypeScript",
  "description": "Comprendre les types et interfaces",
  "priority": "HIGH"
}
```

### 4. Récupérer les Tâches
```http
GET http://localhost:3000/api/todos
Authorization: Bearer <votre_token>
```

### 5. Basculer le Statut d'une Tâche
```http
PATCH http://localhost:3000/api/todos/:id/toggle
Authorization: Bearer <votre_token>
```

---

## 📋 Résumé des Endpoints

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/api/auth/register` | Inscription | ❌ |
| POST | `/api/auth/login` | Connexion | ❌ |
| GET | `/api/auth/profile` | Profil utilisateur | ✅ |
| GET | `/api/todos` | Liste des tâches | ✅ |
| GET | `/api/todos/:id` | Détail d'une tâche | ✅ |
| POST | `/api/todos` | Créer une tâche | ✅ |
| PUT | `/api/todos/:id` | Modifier une tâche | ✅ |
| DELETE | `/api/todos/:id` | Supprimer une tâche | ✅ |
| PATCH | `/api/todos/:id/toggle` | Basculer le statut | ✅ |

---

## ✅ Checklist de Révision

### Node.js & TypeScript
- [ ] Comprendre le rôle de Node.js et npm
- [ ] Savoir initialiser un projet (`npm init -y`)
- [ ] Configurer TypeScript (`tsconfig.json`)
- [ ] Comprendre les types de base (string, number, boolean, array, interface)
- [ ] Utiliser les génériques (`Promise<T>`, `Array<T>`)

### Express
- [ ] Configurer Express avec les middlewares de base
- [ ] Créer des routes et controllers typés
- [ ] Comprendre le cycle Request → Response
- [ ] Typer les paramètres, body et query des requêtes

### Prisma & Neon
- [ ] Configurer Prisma avec Neon (PostgreSQL)
- [ ] Écrire un schema Prisma avec relations
- [ ] Utiliser les commandes Prisma (`generate`, `db push`, `studio`)
- [ ] Effectuer des opérations CRUD typées

### Authentification & Sécurité
- [ ] Implémenter l'authentification JWT
- [ ] Créer un middleware d'authentification
- [ ] Hasher les mots de passe avec bcrypt
- [ ] Configurer CORS pour le frontend

### Pratique
- [ ] Tester l'API avec Postman
- [ ] Comprendre les codes de status HTTP (200, 201, 400, 401, 404, 500)

---

*Document de révision - Service Web TypeScript - College de Maisonneuve - 2025/2026*