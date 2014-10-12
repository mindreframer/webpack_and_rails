# karma tests
js-test:
		./bin/rake karma:run

js-test-watch:
		./bin/rake karma:start

hello:
		@echo hello world


csscomb:
		node_modules/csscomb/bin/csscomb -v --config .csscomb.json fe/ap/