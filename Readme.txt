inicijalizacija package.json datoteke
npm init -y

inicijalizacija nodemon-a (prati promjene i automatski restarta express server)

npm install -D nodemon   (-D samo za lokalno razvojno okruženje (devDependics), neide u distribuciju)

u package.json dodaj pod ""scripts"

"scripts": {
    "start": "node index",
	
		"dev": "nodemon index"
		
		
pokreni s: npm run dev		 (dev je naziv script-a  - vidi iznad)


Setup GIT for vesrsion controll

$ git config --global user.name "Slobodan Krstić"
$ git config --global user.email "slobodan.krstich@ygmail.com"
$ git config --global push.default matching
$ git config --global alias.co checkout
$ git init


Quick setup — if you’ve done this kind of thing before
or	
https://github.com/parhelia1/StockMarket.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line

echo "# StockMarket" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/parhelia1/StockMarket.git
git push -u origin main


…or push an existing repository from the command line

git remote add origin https://github.com/parhelia1/StockMarket.git
git branch -M main
git push -u origin main