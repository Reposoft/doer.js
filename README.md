doer.js
===========

On top of Backbone this lib 
 * Objects should have state and *behavior*.
 * Favors composition over inheritance.

# Motivation

Developed for an enterprise type of web applications, where customers tailor their webapp through the HTML and CSS it loads from.
Scrips need to adapt behavior depending on markup. This is quite different from the one-app-fits-all cloud approach.

Quite possibly the composition ideas in the lib are useful in any app.

# Design goals

Formalize the relation from DOM element to Backbone "View", like View formalizes $el.

Acknowledge that "View" will receive events and act on them - like a controller.
So let's call it a Doer to not annoy MVC purists.

The actual View work should be formalized as data binding to a template. Avoiding re-render.

## Namespacing

When loaded as a regular js file there'll be `window.doer` and `window.as == window.doer.as`.

With browserify you'd do `var doer = require('doer')` followed by `doer.as = {}`. Without the .as doer would fail pretty soon.
