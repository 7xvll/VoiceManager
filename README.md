# TempVoice Discord Bot

Un bot Discord pour créer et gérer des salons vocaux temporaires, développé par 7xvl.

## Fonctionnalités

- Création de salons vocaux temporaires supprimés lorsqu'ils sont vides  
- Interface simple pour la gestion des salons  
- Contrôle de la confidentialité, des limites d’utilisateurs et des paramètres  
- Gestion des utilisateurs (inviter, expulser, approuver, bloquer)  
- Transfert ou revendication de la propriété d’un salon  
- Enregistrement automatique de tous les paramètres  
- Site web simple affichant les informations du développeur  

## Installation rapide

1. Clonez le dépôt et exécutez `npm install`  
2. Créez un fichier `.env` avec :  
   ```
   TOKEN=ton_token_discord_bot
   CLIENT_ID=ton_client_id_discord
   GUILD_ID=ton_server_id_discord
   MONGODB_URI=ton_url_de_connexion_mongodb
   PORT=3000
   ```
3. Déployez les commandes et démarrez le bot : `npm start`

## Site web

Le bot inclut un site web simple affichant des informations sur le développeur. Lorsque vous démarrez le bot avec `npm start`, le site sera disponible à `http://localhost:3000` (ou au port spécifié dans le fichier `.env`).

## Utilisation

1. Exécutez la commande `/setup` et choisissez le type d’interface  
2. Rejoignez le Salon Créateur pour créer votre propre salon vocal  
3. Utilisez le Salon d’Interface pour gérer votre salon  

## Options de gestion des salons

- **NOM** - Renommer le salon  
- **LIMITE** - Définir une limite d’utilisateurs  
- **CONFIDENTIALITÉ** - Verrouiller/déverrouiller le salon  
- **SALLE D’ATTENTE** - Créer une salle d’attente  
- **FIL DE DISCUSSION** - Créer un fil de discussion  
- **APPROUVER/RÉVOQUER** - Gérer les utilisateurs de confiance  
- **INVITER/EXPULSER** - Gérer les membres du salon  
- **RÉGION** - Modifier la région du salon vocal  
- **BLOQUER/DÉBLOQUER** - Gérer les utilisateurs bloqués  
- **REVENDIQUER/TRANSFÉRER** - Gérer la propriété du salon  
- **SUPPRIMER** - Supprimer le salon  

## Licence

Licence MIT avec obligation d’attribution et interdiction de vente commerciale  

- Ce logiciel est créé par Coders Planet  
- Vous devez créditer Coders Planet comme auteur original dans tout projet utilisant ce code  
- Vous devez fournir une attribution dans tout média présentant ce code  
- La vente commerciale de ce logiciel ou de ses dérivés est interdite sans autorisation explicite  

## Créateur

Ce projet est développé et maintenu par 7xvl
