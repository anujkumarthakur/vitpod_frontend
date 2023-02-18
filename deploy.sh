echo "Switching to branch master"
git checkout  master

echo "Bulding app..."
npm run build 

echo "deploying..."
scp -r build/*  root@103.127.146.159:/var/www/103.127.146.159/

echo "Done!"