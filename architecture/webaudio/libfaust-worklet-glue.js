
var FaustModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(FaustModule) {
  FaustModule = FaustModule || {};



  return FaustModule
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = FaustModule;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return FaustModule; });
    else if (typeof exports === 'object')
      exports["FaustModule"] = FaustModule;
    export default FaustModule;
var tempDouble, tempI64;