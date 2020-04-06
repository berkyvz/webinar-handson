cd webinar-api
mvn clean install
docker build -t webinar-api:latest .
cd ..
cd webinar-front
rm -rf node_modules
rm -rf package-lock.json
npm i
npm run build
docker build -t webinar-front:latest .
echo "DONE..............."

