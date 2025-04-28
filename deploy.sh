#!/bin/bash

set -e  # ⛔ Stopper le script immédiatement si une erreur arrive

SERVER_USER="root"
SERVER_IP="185.98.138.140"
SERVER_PATH="/var/www/my-react-app"
BACKUP_PATH="/root/backup-my-react-app-$(date +%Y%m%d-%H%M%S)"

echo "📦 Build du projet en cours..."
npm run build

echo "🚀 Connexion au serveur pour backup..."
ssh $SERVER_USER@$SERVER_IP "
  echo '📦 Sauvegarde de l'ancien site...';
  mkdir -p $BACKUP_PATH;
  cp -r $SERVER_PATH/* $BACKUP_PATH/;
  echo '🗑️ Suppression de l'ancien build...';
  rm -rf $SERVER_PATH/*;
"

echo "🚀 Envoi des nouveaux fichiers vers le serveur..."
scp -r build/* $SERVER_USER@$SERVER_IP:$SERVER_PATH/

echo "🔄 Redémarrage de Nginx sur le serveur..."
ssh $SERVER_USER@$SERVER_IP "sudo systemctl restart nginx"

echo "✅ Déploiement terminé avec succès !"
echo "🌍 Site en ligne : http://$SERVER_IP"
