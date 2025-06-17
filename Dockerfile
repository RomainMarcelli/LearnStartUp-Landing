# Base Node.js image
FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'app
COPY . .

# Exposer le port utilisé par React
EXPOSE 3000

# Démarrer le serveur React
CMD ["npm", "start"]
