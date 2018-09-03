exports.classNames = function classNamesObjectToString(classNamesObject) {
  if (typeof classNamesObject !== 'object') throw new Error('className');
  let classNames = '';
  for(let key in classNamesObject) {
    if(classNamesObject[key]) classNames += key;
  }

  return classNames;
}