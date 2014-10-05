var assert = require('assert');
var expect = require('expect.js');
var models = require('../../lib/models');

describe('The models module', function() {
	it('Should create Entities ', function() {
		var entity = new models.Entity();
		expect(entity).to.not.be(undefined);
		expect(entity).to.not.be(null);
	});
	it('Should create Entities with default name', function() {
		var entity = new models.Entity();
		expect(entity.name).to.equal('Entity');
	});
	it('Should receive name on constructor ', function() {
		var entity = new models.Entity('TheEntity');
		expect(entity.name).to.equal('TheEntity');
	});
	it('Should receive positions as optional on constructor ', function() {
		var entity = new models.Entity('TheEntity', {
			position: models.createPosition(10, 10)
		});
		expect(entity.position).to.eql(models.createPosition(10, 10));
	});
	it('If doesnt receive position gets default value', function() {
		var entity = new models.Entity();
		expect(entity.position).to.eql(models.createPosition(0, 0));
	});
	it('If doesnt receive position gets default value', function() {
		var entity = new models.Entity();
		expect(entity.position).to.eql(models.createPosition(0, 0));
	});

}); //end describe