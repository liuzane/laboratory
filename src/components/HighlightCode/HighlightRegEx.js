
const highlightRegExList = [
  { regex: /\/\/.*(?=\n)/g, color: '#999999' },
  // { regex: /\/\/.*(?=\n)/g, color: '#999999' },
];

const highlightRegExReplace = htmlString => {
  highlightRegExList.forEach(item => {
    // let regex = item.regex.exec(htmlString);
    let match = htmlString.match(item.regex);
    
    if (match) {
      match.forEach(result => {
        htmlString = htmlString.replace(result, `<span style="color: ${ item.color }">${ result }</span>`);
      });
    }
  });
  return htmlString;
};

export default highlightRegExReplace;