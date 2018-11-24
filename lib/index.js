module.exports = function (content, options) {
  var removeCommentsWithReg = require('./removeWithReg');
  var removeCommentsWithX = require('./removeWithX');

  if (!content) {
    return ;
  }
  content = removeCommentsWithReg(content, options);
  content = removeCommentsWithX(content);

  return content;
}