

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

  it("Defines as.rt that does console.assert with fail for undefined", function() {

  });

});

describe("as.Doer", function() {

  it("Composes Backbone object event handling onto the argument", function() {

  });

  it("Defaults to a generic service, neither a Model nor a View", function() {

  });

  it("Avoids defining an .extend function, you'd have to compose that onto it", function() {

  });

});

descibe( function() {



});

describe("custom object for \"as\"", function() {

});
