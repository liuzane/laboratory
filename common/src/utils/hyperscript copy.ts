/* eslint-disable */
// @ts-nocheck

var w = window;
var document = w.document;
var Text = w.Text;

function h(...args) {
  var e = null;
  function item(l) {
    var r;
    function parseClass(string) {
      // Our minimal parser doesn’t understand escaping CSS special
      // characters like `#`. Don’t use them. More reading:
      // https://mathiasbynens.be/notes/css-escapes .

      var m = string.split(/([\.#]?[^\s#.]+)/);
      if (/^\.|#/.test(m[1])) e = document.createElement('div');
      forEach(m, function (v) {
        var s = v.substring(1, v.length);
        if (!v) return;
        if (!e) e = document.createElement(v);
        else if (v[0] === '.') e.classList.add(s);
        else if (v[0] === '#') e.setAttribute('id', s);
      });
    }

    if (l == null);
    else if ('string' === typeof l) {
      if (!e) parseClass(l);
      else e.appendChild((r = document.createTextNode(l)));
    } else if (
      'number' === typeof l ||
      'boolean' === typeof l ||
      l instanceof Date ||
      l instanceof RegExp
    ) {
      e.appendChild((r = document.createTextNode(l.toString())));
    }
    //there might be a better way to handle this...
    else if (isArray(l)) forEach(l, item);
    else if (isNode(l)) e.appendChild((r = l));
    else if (l instanceof Text) e.appendChild((r = l));
    else if ('object' === typeof l) {
      for (var k in l) {
        if ('function' === typeof l[k]) {
          if (/^on\w+/.test(k)) {
            (function (k, l) {
              // capture k, l in the closure
              if (e.addEventListener) {
                e.addEventListener(k.substring(2), l[k], false);
              } else {
                e.attachEvent(k, l[k]);
              }
            })(k, l);
          } else {
            // observable
            e[k] = l[k]();
          }
        } else if (k === 'style') {
          if ('string' === typeof l[k]) {
            e.style.cssText = l[k];
          } else {
            for (var s in l[k])
              (function (s, v) {
                if ('function' === typeof v) {
                  // observable
                  e.style.setProperty(s, v());
                } else var match = l[k][s].match(/(.*)\W+!important\W*$/);
                if (match) {
                  e.style.setProperty(s, match[1], 'important');
                } else {
                  e.style.setProperty(s, l[k][s]);
                }
              })(s, l[k][s]);
          }
        } else if (k === 'attrs') {
          for (var v in l[k]) {
            e.setAttribute(v, l[k][v]);
          }
        } else if (k.substr(0, 5) === 'data-') {
          e.setAttribute(k, l[k]);
        } else {
          e[k] = l[k];
        }
      }
    } else if ('function' === typeof l) {
      //assume it's an observable!
      var v = l();
      e.appendChild((r = isNode(v) ? v : document.createTextNode(v)));
    }

    return r;
  }
  while (args.length) item(args.shift());

  return e;
}

function isNode(el) {
  return el && el.nodeName && el.nodeType;
}

function forEach(arr, fn) {
  if (arr.forEach) return arr.forEach(fn);
  for (var i = 0; i < arr.length; i++) fn(arr[i], i);
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}

export { h };
