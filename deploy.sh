#!/bin/bash

echo "📦 Build du projet en cours..."
npm run build

echo "🚀 Envoi des fichiers vers le serveur..."
scp -r build/* root@185.98.138.140:/root/LearnStartUp-Landing/build/

echo "🔄 Redémarrage de Nginx sur le serveur..."
ssh root@185.98.138.140 "sudo systemctl restart nginx"

echo "✅ Déploiement terminé avec succès ! Va sur http://185.98.138.140"
