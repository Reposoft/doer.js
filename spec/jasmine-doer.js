

describe("jQuery.fn.doer, that's $el.doer([object])", function() {

  it("Should return undefined if no Doer has been registered", function() {

  });

  it("Should register a Doer when given an object", function() {
    var $e = $('<any/>');
    $e.doer({});
    expect($e.doer()).toBeTruthy();
  });

  it("Will abort jQuery chaining", function() {

  });

  it("But you can get it back with .$el", function() {

  });

  it("Should decorate existing object, not produce a new one", function() {
    var o = {};
    $('<any/>').doer({});
  });

  it("Should register on all elements in the jQuery collection", function() {

  });

  it("Bu design enforces <=1 View per DOM element, to complement Backbone's one element per view", function() {

  });

  it("Accepts an edisting Backbone View, but only if the element matches", function() {
    var element = $('<any>')[0];
    var view = new Backbone.View({el: element});

  });

  it("Can therefore not accept a Backbone View on multiple elements", function() {
    var some = $('<any/><any/>');
    var view = new Backbone.View({el: some[0]});

  });

  // TODO To be discussed
  xit("Should return the first doer if there are many elements", function() {

  });

  // TODO do anything with the events hash?

});

describe("Favor composition over inheritance", function() {

  it("as.ArbitraryBusinessLogic(o) is just a convention", function() {

  });

  it("Allows other composables to assert dependencies", function() {

  });

  // See doer.asset
  xit("Defines as.rt that does console.assert with fail for undefined", function() {

  });

  it("Deals with neiter pseudo-Classes nor prototypes", function() {

  });

  it("Provides encapsulation anyway because as.")

});

describe("as.Doer", function() {

  it("Composes Backbone object event handling onto the argument", function() {

  });

  it("Defaults to a generic service, neither a Model nor a View", function() {

  });

  it("Avoids defining an .extend function, you'd have to compose that onto it", function() {

  });

  it("Can however composoe onto arbitrary Backbone objects", function() {

  });

  it("Returns the object for composition chaining", function() {

  });

  it("Expects other doers to return the object as well", function() {

  });

});

describe("doer.assert(doer.SomeDependency, o)", function() {

});

describe("console.assert(!!o.dependency, message) is also fine of course", function() {

  it("Will however pass for any property of that name, with no check that it matches the registered doer", function() {

  });

});

describe("Simple and transparent Dependency Injection", function() {

  it("Complements as.rt (or doer.assert) with as.inject (or doer.inject)", function() {

  });

  it("Injects, by composition, the dependency if not already there", function() {

  });

  it("Can only identify memters of the as. (or doer.) objects", function() {

  });

  it("Composes onto the second argument", function() {

  });

  it("Could use 'this' if no second argument, but we're aiming for ===1 way of doing things", function() {

  });

});

describe("noConflict", function() {

});

describe("Grabage collection aspects of $.fn.doer", function() {

  it("What do do with a view if a DOM element is detached or removed?");

  xit("Can emit a 'detached' (from DOM) event");

  xit("Can emit a 'removed' event");

  xit("Can emit an 'attached' event")

});