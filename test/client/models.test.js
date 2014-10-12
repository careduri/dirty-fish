describe('In the models module,', function() {
    it('Should have dirtyfish NameSpace ', function() {
        expect(dfns).toBeDefined();
    });
    describe(' Entities, ', function() {
        it('Should be able to create an Entity ', function() {
            var entity = new dfns.Entity();
            expect(entity).toBeDefined();
            expect(entity).not.toBe(null);
        });
        it('Should create a default name Entity if nothing is passed', function() {
            var entity = new dfns.Entity();
            expect('Entity').toEqual(entity.name);
        });
        it('Should create a entity with the name passed as constructor argument ', function() {
            var entity = new dfns.Entity('TheEntity');
            expect(entity.name).toEqual('TheEntity');
        });
        it('Should create an entity with x position = 0 if nothing is passed as constructor argument', function() {
            var entity = new dfns.Entity("Name");
            expect(0).toEqual(entity.x);

        });
        it('Should create an entity with y positions = 0 if nothing is passed as constructor argument', function() {
            var entity = new dfns.Entity("Name");
            expect(0).toEqual(entity.y);
        });
        it('Should create an entity with x and y positions with valid constructor arguments', function() {
            var entity = new dfns.Entity("Name", 5, 7);
            expect(5).toEqual(entity.x);
            expect(7).toEqual(entity.y);
        });
        it('Should create an valid attribute with name and types', function() {
            var attribute = new dfns.Attribute("attrName", "String");
            expect("attrName").toEqual(attribute.name);
            expect("String").toEqual(attribute.attrType);
        });
        it('Should have an entity adding an attribute ', function() {
            var entity = new dfns.Entity("person");
            var attribute = entity.addAttribute("age", "String");
            expect(attribute).toEqual(new dfns.Attribute("age", "String"));
        });
        it('Should entity should have attributes ', function() {
            var entity = new dfns.Entity("person");
            expect(entity.attributes.length).toEqual(0);
        });

        it('Should keep reference  of the attribute ', function() {
            var entity = new dfns.Entity("person");
            var attribute = entity.addAttribute("age", "String");
            expect(entity.attributes).toEqual([new dfns.Attribute("age", "String")]);
        });
        it('Should make sure to clean extra space when creating the attribute ', function() {
            var entity = new dfns.Entity("person");
            var attribute = entity.addAttribute(" age ", " String ");
            expect([new dfns.Attribute("age", "String")]).toEqual(entity.attributes);
        });
        it('An entity should not create the same attribute twice', function() {
            var entity = new dfns.Entity("person");
            entity.addAttribute("age", "String");
            expect(entity.attributes.length).toEqual(1);
            entity.addAttribute("age", "String");
            expect(entity.attributes.length).toEqual(1);
        });
        it('An entity should not create the same attribute twice even if the name has spaces', function() {
            var entity = new dfns.Entity("person");
            entity.addAttribute("age", "String");
            expect(entity.attributes.length).toEqual(1);
            entity.addAttribute(" age ", "String");
            expect(entity.attributes.length).toEqual(1);
        });

    });
    describe(' diagrams, ', function() {
        it('should be defined', function() {
            expect(dfns.Diagram).toBeDefined();
        });
    });

}); //end describe