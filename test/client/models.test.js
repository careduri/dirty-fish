var assert = require('assert');
var expect = require('expect.js');
var models = require('../../public/javascripts/models');

describe('The Canvas module', function() {
    it('Should be able to create an Entity ', function() {
        var entity = new models.Entity();
        expect(entity).to.not.be(undefined);
        expect(entity).to.not.be(null);
    });
    it('Should create a default name Entity if nothing is passed', function() {
        var entity = new models.Entity();
        expect('Entity').to.equal(entity.name);
    });
    it('Should create a entity with the name passed as constructor argument ', function() {
        var entity = new models.Entity('TheEntity');
        expect(entity.name).to.equal('TheEntity');
    });
    it('Should create an entity with x position = 0 if nothing is passed as constructor argument', function() {
        var entity = new models.Entity("Name");
        expect(0).to.equal(entity.x);

    });
    it('Should create an entity with y positions = 0 if nothing is passed as constructor argument', function() {
        var entity = new models.Entity("Name");
        expect(0).to.equal(entity.y);

    });
    it('Should create an entity with x and y positions with valid constructor arguments', function() {
        var entity = new models.Entity("Name", 5, 7);
        expect(5).to.equal(entity.x);
        expect(7).to.equal(entity.y);

    });
    it('Should create an valid attribute with name and types', function() {
        var attribute = new models.Attribute("attrName", "String");
        expect("attrName").to.equal(attribute.name);
        expect("String").to.equal(attribute.attrType);
    });
    it('Should have an entity adding an attribute ', function() {
        var entity = new models.Entity("person");
        var attribute = entity.addAttribute("age", "String");
        expect(attribute).to.eql(new models.Attribute("age", "String"));
    });
    it('Should entity should have attributes ', function() {
        var entity = new models.Entity("person");
        expect(entity.attributes).to.length(0);
    });

    it('Should keep reference  of the attribute ', function() {
        var entity = new models.Entity("person");
        var attribute = entity.addAttribute("age", "String");
        expect(entity.attributes[0]).to.eql(new models.Attribute("age", "String"));
    });


}); //end describe