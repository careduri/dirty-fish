var assert = require('assert');
var expect = require('expect.js');
var controller = require('../../public/javascripts/controller');

describe('The Controller module', function() {
    it('Should be able to have an Diagram ', function() {
        expect(controller.controller).to.not.be(undefined);
    });

}); //end describe