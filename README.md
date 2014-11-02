doer.js
===========

On top of Backbone this lib
 * Objects should have state and *behavior*.
 * Favors composition over inheritance.

If you need someone to kill subclassing for you, try http://raganwald.com/2014/03/31/class-hierarchies-dont-do-that.html

We havent taken stance to http://raganwald.com/2014/04/10/mixins-forwarding-delegation.html yet though.

# Motivation

Developed for an enterprise type of web applications, where customers tailor their webapp through the HTML and CSS it loads from.
Scrips need to adapt behavior depending on markup. This is quite different from the one-app-fits-all cloud approach.

The composition ideas in the lib are just mixins, with private state. Might be naïve, but is sure transparent.

Regarding Crockford's recommendation in chapter 5 of https://www.acmi.net.au/media/12347/javascript_the_good_parts.pdf to use uppercase first letter only for constructors, our position is that if we're not using constructors at all we might use upper case first letter on the most constructor-like functions we have.

# Design goals

Formalize the relation from DOM element to Backbone "View", like View formalizes $el.

Acknowledge that "View" will receive events and act on them - like a controller.
So let's call it a Doer to not annoy MVC purists.

The actual View work should be formalized as data binding to a template. Avoiding re-render.

## Namespacing

When loaded as a regular js file there'll be `window.doer` and `window.as == window.doer.as`.

With browserify you'd do `var doer = require('doer')` followed by `doer.as = {}`. Without the .as doer would fail pretty soon.

## Upcoming divide of the lib into separate parts

 * The convention
 * Abstractions for assert and inject
 * Backbone wrapping
 * jQuery plugin (for views)
