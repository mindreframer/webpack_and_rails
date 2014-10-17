
webpack:
		fe/node_modules/webpack/bin/webpack.js  --config fe/webpack.config.js --watch

csscomb:
		fe/node_modules/csscomb/bin/csscomb -v --config fe/.csscomb.json fe/ap/

karma:
		fe/node_modules/karma/bin/karma start  fe/karma.conf.js
