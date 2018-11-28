module.exports = function (content, options) {
  var removeBlockAndLine = require('./removeBlockAndLine');
  var removeLinein = require('./removeLinein');

  if (!content) {
    return ;
  }
  content = removeBlockAndLine(content, options);
  if (options && options.linein) {
    var contentArr = content.split('\n');
    for (var i = 0, count = contentArr.length; i < count; i++) {
      contentArr[i] = removeLinein(contentArr[i], options);
    }
    var content = contentArr.join('\n');
  }

  return content;
}