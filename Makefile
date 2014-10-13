
webpack:
		node_modules/webpack/bin/webpack.js --watch

csscomb:
		node_modules/csscomb/bin/csscomb -v --config .csscomb.json fe/ap/

# karma tests
js-test:
		./bin/rake karma:run

js-test-watch:
		./bin/rake karma:start
