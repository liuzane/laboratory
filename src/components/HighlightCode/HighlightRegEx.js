const replace = function (color, content) {
  return `{^${ color }-}${ content }{-${ color }^}`;
};

const comments = function (html) {
  return html.replace(/\/\/.*(?=\n)/g, function (content) {
    return replace('#999999', content);
  });
};

const tag = function (html) {
  return html.replace(/&lt;[^(&t;)]+&t;/g, function (_1, _2, content) {
    console.log(arguments);
    return replace('#fc929e', content);
  });
};

const highlightRegExReplace = function (html) {
  html = comments(html);

  html = tag(html);

  return html.replace(/{\^(.*)-}(.*){-.*\^}/g, function (text, color, content) {
    return `<span style="color: ${ color }">${ content }</span>`;
  });
};

export default highlightRegExReplace;