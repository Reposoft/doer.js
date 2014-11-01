doer.js
===========

Objects should have state and *behavior*.

Favors composition over inheritance.

Formalizes the relation from DOM element to Backbone "View", like View formalizes $el.

Acknowledges that "View" will receive events and act on them - like a controller
- while the actual View work should be formalized as data binding to a template.
Avoiding re-render.
