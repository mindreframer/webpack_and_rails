
webpack:
		node_modules/webpack/bin/webpack.js  --config fe/webpack.config.js --watch

csscomb:
		node_modules/csscomb/bin/csscomb -v --config fe/.csscomb.json fe/ap/

karma:
		node_modules/karma/bin/karma start  fe/karma.conf.js
