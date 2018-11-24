module.exports = function (content, options) {
  var removeCommentsWithReg = require('./removeWithReg');
  
  if (!content) {
    return ;
  }
  content = removeCommentsWithReg(content, options);

  return content;
}