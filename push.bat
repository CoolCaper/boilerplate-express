echo off 
git add .
git commit -m %1
git push
docker compose build
docker push "mshauna26/boilerplate-express-server:latest"