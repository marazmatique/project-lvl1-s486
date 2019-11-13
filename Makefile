install:
	npm install

calc:
	npx babel-node 'src/bin/brain-games-calc.js'

even:
	npx babel-node 'src/bin/brain-games-even.js'

gcd:
	npx babel-node 'src/bin/brain-games-gcd.js'

prog:
	npx babel-node 'src/bin/brain-games-progression.js'

prime:
	npx babel-node 'src/bin/brain-games-prime.js'

publish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY: test