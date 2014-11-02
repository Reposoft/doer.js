

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

  it("With the convention: as.ArbitraryBusinessLogic(o)", function() {

  });

  it("Allows other composables to assert dependencies", function() {

  });

  it("Makes calls between composables traceable and easy to follow", function() {

  });

  it("Deals with neither pseudo-Classes nor prototypes", function() {

  });

  it("Provides encapsulation anyway because as.Whatever is a function that can do 'var'", function() {

  });

});

describe("as", function() {

  it("Is is just there to add doers to", function() {

  });

  it("Has nothing but doers", function() {

  });

});

describe("as.Doer", function() {

  it("Composes Backbone object event handling onto the argument", function() {

  });

  it("Then becomes a generic service, neither a Model nor a View", function() {

  });

  it("Avoids defining an .extend function, you'd have to compose that onto it", function() {

  });

  it("Returns the object for composition chaining", function() {

  });

  it("Expects other doers to return the object as well", function() {

  });

  it("Is just a convention, perfectly fine for composition without as.Doer", function() {

  });

  it("Can compose onto instances of Backbone classes", function() {

  });

});

describe("doer.assert(doer.SomeDependency, o)", function() {

  it("Could use 'this' if no second argument, but we're aiming for ===1 way of doing things", function() {

  });

});

describe("console.assert(!!o.dependency, message) is also fine of course", function() {

  it("Will however pass for any property of that name, with no check that it matches the registered doer", function() {

  });

});

describe("doer.conflict", function() {

  xit("Does reverse assert");

});

describe("Simple and transparent Dependency Injection", function() {

  it("Complements as.rt (or doer.assert) with as.inject (or doer.inject)", function() {

  });

  it("Injects, by composition, the dependency if not already there", function() {

  });

  it("Can only identify members of 'as.'", function() {

  });

  it("Composes onto the second argument", function() {

  });

});

describe("as.Module", function() {

  it("Adds o.assert, o.conflict, o.inject", function() {

  });

  it("Is just aliases of the corresponding doer.assert etc but takes a single argument", function() {

  });

  it("Also adds o.as", function() {

  });

  it("Which is a special 'as' so you can do: obj = as.Module({}).as.Behavior1().as.Behavior2()", function() {

  });

});


describe("noConflict", function() {

});

describe("CommonJS variants of as.Behavior(o) and doer.inject", function() {

  it("Could do something like as.require('module', o), though that would contradict the 'only doers in as.' rule", function() {

  });

  it("Could do something like doer.inject('module', o)", function() {

  });

});

describe("Grabage collection aspects of $.fn.doer", function() {

  it("What do do with a view if a DOM element is detached or removed?");

  xit("Can emit a 'detached' (from DOM) event");

  xit("Can emit a 'removed' event");

  xit("Can emit an 'attached' event")

});

describe("The consequences", function() {

  it("Means that o.Behavior1.method is the same function for every composition using Behavior1", function() {

  });

  it("Means you can override", function() {

  });

  it("Is a feature", function() {

  });

  it("Is still easy to do (o.Behavior2.method || o.Behavior1.method)(args)", function() {

  });

});

describe("Applying on a prototype", function() {

  it("Should be fine I guess");

});
