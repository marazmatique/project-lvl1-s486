install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

build:
	NODE_ENV=production babel src --out-dir dist --source-maps inline

prepublishOnly:
	npm run build