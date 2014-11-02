

describe("`jQuery.fn.doer`, that's `$el.doer([object])`", function() {

  it("Should return undefined if no Doer has been registered", function() {
    
    expect('TODO').toBeTruthy();
  });

  it("Should register a Doer when given an object", function() {
    var $e = $('<any/>');
    //$e.doer({});
    //expect($e.doer()).toBeTruthy();
    expect('TODO').toBeTruthy();
  });

  it("Will abort jQuery chaining", function() {
    
    expect('TODO').toBeTruthy();
  });

  it("But you can get it back with `.$el`", function() {
    
    expect('TODO').toBeTruthy();
  });

  it("Should decorate existing object, not produce a new one", function() {
    var o = {};
    //$('<any/>').doer({});
    expect('TODO').toBeTruthy();
  });

  it("Should register on all elements in the jQuery collection", function() {

    expect('TODO').toBeTruthy();
  });

  it("By design enforces <=1 View per DOM element, to complement Backbone's one element per view", function() {

    expect('TODO').toBeTruthy();
  });

  it("Accepts an edisting Backbone View, but only if the element matches", function() {
    var element = $('<any>')[0];
    var view = new Backbone.View({el: element});

    expect('TODO').toBeTruthy();
  });

  it("Can therefore not accept a Backbone View on multiple elements", function() {
    var some = $('<any/><any/>');
    var view = new Backbone.View({el: some[0]});

    expect('TODO').toBeTruthy();
  });

  xit("Should return the first doer if there are many elements", function() {
    // Really?
  });

  xit("Might need to have an opinion on the event hash", function() {
    
  });

});

describe("Favor composition over inheritance", function() {

  it("With the convention `as.ArbitraryBusinessLogic(o)`", function() {

    expect('TODO').toBeTruthy();
  });

  it("Allows other composables to assert dependencies", function() {

    expect('TODO').toBeTruthy();
  });

  it("Makes calls between composables traceable and easy to follow", function() {

    expect('TODO').toBeTruthy();
  });

  it("Deals with neither pseudo-Classes nor prototypes", function() {

    expect('TODO').toBeTruthy();
  });

  it("Provides encapsulation anyway because `as.Whatever` is a function that can do `var`", function() {

    expect('TODO').toBeTruthy();
  });
  
  it("Is still just a convention", function() {
    
    expect('TODO').toBeTruthy();
  });

});

describe("`as`", function() {

  it("Is is just there to add doers to", function() {

    expect('TODO').toBeTruthy();
  });

  it("Has nothing but doers", function() {

    expect('TODO').toBeTruthy();
  });

});

describe("`as.Doer`", function() {

  it("Composes Backbone object event handling onto the argument", function() {

    expect('TODO').toBeTruthy();
  });

  it("Then becomes a generic service, neither a Model nor a View", function() {

    expect('TODO').toBeTruthy();
  });

  it("Avoids defining an .extend function, you'd have to compose that onto it", function() {

    expect('TODO').toBeTruthy();
  });

  it("Returns the object for composition chaining", function() {

    expect('TODO').toBeTruthy();
  });

  it("Expects other doers to return the object as well", function() {

    expect('TODO').toBeTruthy();
  });

  it("Is just a convention, perfectly fine for composition without as.Doer", function() {

    expect('TODO').toBeTruthy();
  });

  it("Can compose onto instances of Backbone classes", function() {

    expect('TODO').toBeTruthy();
  });

});

describe("`doer.assert(doer.SomeDependency, o)`", function() {

  it("Could use 'this' if no second argument, but we're aiming for ===1 way of doing things", function() {

    expect('TODO').toBeTruthy();
  });

});

describe("`console.assert(!!o.dependency, message)` is also fine of course", function() {

  it("Will however pass for any property of that name, with no check that it matches the registered doer", function() {

    expect('TODO').toBeTruthy();
  });

});

describe("`doer.conflict`", function() {

  it("Does reverse assert", function() {
    
    expect('TODO').toBeTruthy();
  });

});

describe("Simple and transparent Dependency Injection", function() {

  it("Complements `doer.assert` with `doer.inject`", function() {

    expect('TODO').toBeTruthy();
  });

  it("Injects, by composition, the dependency if not already there", function() {

    expect('TODO').toBeTruthy();
  });

  it("Succeeds if someone has added that composable to `as.`", function() {

    expect('TODO').toBeTruthy();
  });

  it("Composes onto the second argument", function() {

    expect('TODO').toBeTruthy();
  });

});

describe("`as.Ordnung`", function() {

  xit("Is still waiting for a non-german name", function() {
    
  });
  
  it("Adds `o.assert`, `o.conflict`, `o.inject`", function() {

    expect('TODO').toBeTruthy();
  });

  it("Is just aliases of the corresponding `doer.assert` etc but take a single argument", function() {

    expect('TODO').toBeTruthy();
  });

  it("Also adds `o.as`", function() {

    expect('TODO').toBeTruthy();
  });

  it("Which is a special `as.` so you can do: `obj = as.Ordnung({}).as.Doer().as.Behavior1().as.Behavior2()`", function() {

    expect('TODO').toBeTruthy();
  });

});

describe("noConflict", function() {

  it("Is something we gotta have, I suppose", function() {
    
    expect('TODO').toBeTruthy();
  });
  
});

describe("CommonJS variants of `as.Behavior(o)` and doer.inject", function() {

  it("Could do something like `as.require('module', o)`, though that would contradict the 'only doers in as.' rule", function() {

    expect('TODO').toBeTruthy();
  });

  it("Could do something like `doer.inject('module', o)`", function() {

    expect('TODO').toBeTruthy();
  });
  
  it("Might not be useful because `as.MyBehavior = require('mybehavior')` is good enough", function() {
    
    expect('TODO').toBeTruthy();
  });

});

describe("Grabage collection aspects of $.fn.doer", function() {

  xit("What do do with a view if a DOM element is detached or removed?");

  xit("Can emit a 'detached' (from DOM) event");

  xit("Can emit a 'removed' event");

  xit("Can emit an 'attached' event")

});

describe("The consequences of using this lib", function() {

  it("Means that o.Behavior1.method is the same function for every composition using Behavior1", function() {

    expect('TODO').toBeTruthy();
  });

  it("Means you can override", function() {

    expect('TODO').toBeTruthy();
  });

  it("Is a feature", function() {

    expect('TODO').toBeTruthy();
  });

  it("Is still easy to do (o.Behavior2.method || o.Behavior1.method)(args)", function() {

    expect('TODO').toBeTruthy();
  });

});

describe("Composing onto a prototype", function() {

  it("Should be fine I guess", function() {
    
    expect('TODO').toBeTruthy();
  });

});
