
const highlightRegExList = [
  { regex: /\/\/.*(?=\n)/g, color: '#999999' }, //注释
  { regex: /(?<=<).*?(?=>)/g, color: '#fc929e' }, //注释
  // { regex: /\/\/.*(?=\n)/g, color: '#999999' },
];

const highlightRegExReplace = htmlString => {
  highlightRegExList.forEach(item => {
    // let regex = item.regex.exec(htmlString);
    // let match = htmlString.match(item.regex);
    htmlString = htmlString.replace(item.regex, function (content) {
      return `{^${ item.color }-}${ content }{-${ item.color }^}`;
    });
    // if (match) {
    //   match.forEach(result => {
    //     htmlString = htmlString.replace(result, `<span style="color: ${ item.color }">$1</span>`);
    //   });
    // }
  });

  htmlString = htmlString.replace(/{\^(.*)-}(.*){-.*\^}/g, function (text, color, content) {
    return `<span style="color: ${ color }">${ content }</span>`;
  });

  return htmlString;
};

export default highlightRegExReplace;