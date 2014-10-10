test:
	mocha test/server/*.test.js
	karma start karma.conf.js --browsers PhantomJS
test-once:
	karma start karma.conf.js --single-run --browsers PhantomJS
.PHONY: test
