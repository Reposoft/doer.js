/**
 * Adds auto refresh button to Jasmine dist's SpecRunner.html
 */
(function() {

  var
    enabled = /#repeat/.exec(window.location.hash),
    interval = 5000,
    wait = undefined,
    refresh = function() {window.location.reload();}
    enable = function(t) {wait = window.setTimeout(refresh, t);},
    cancel = function() {window.clearTimeout(wait);},
    control = $('<div id="refresh"><label for="enable-reload">auto refresh</label><input id="refresh-enable" type="checkbox"/></div>'),
    parent = $('body').append(control),
    checkbox = $('#refresh-enable', control).change(function() {
      if ($(this).is(':checked')) {
        window.location.hash = '#repeat';
        enable(10);
      } else {
        window.location.hash = '';
        cancel();
      }
    });

  if (enabled) {
    enable(interval);
    $('#refresh-enable').attr('checked','checked');
  }

})();
