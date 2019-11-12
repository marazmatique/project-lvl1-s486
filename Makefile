install:
	npm install

calc:
	npx babel-node 'src/bin/brain-games-calc.js'

even:
	npx babel-node 'src/bin/brain-games-even.js'

publish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY: test