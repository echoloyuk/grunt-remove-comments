module.exports = function (contents, options) {

  const multilineComment = /^[\t\s]*\/\*\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const specialComments = /^[\t\s]*\/\*!\*?[^!][\s\S]*?\*\/[\r\n]/gm
  const singleLineComment = /^[\t\s]*(\/\/)[^\n\r]*[\n\r]/gm

  options.multiline = (null === options.multiline || undefined === options.multiline) ? true : options.multiline;
  options.singleline = (null === options.singleline || undefined === options.singleline) ? true : options.singleline;
  options.keepSpecialComments = (null === options.keepSpecialComments || undefined === options.keepSpecialComments) ? true : options.keepSpecialComments;

  if ( options.multiline ) {
    contents = contents.replace(multilineComment, '');
  }

  if ( options.singleline ) {
    contents = contents.replace(singleLineComment, '');
  }

  if ( !options.keepSpecialComments ) {
    contents = contents.replace(specialComments, '');
  }

  return contents;
}