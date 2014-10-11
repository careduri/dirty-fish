test:
	mocha test/server/*.test.js
	karma start karma.conf.js --single-run --browsers PhantomJS
test-client:
	karma start karma.conf.js --browsers PhantomJS
test-client-chrome:
	karma start karma.conf.js --browsers Chrome
.PHONY: test
