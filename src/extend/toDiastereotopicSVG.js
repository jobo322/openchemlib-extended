'use strict';

module.exports = function toDiastereotopicSVG(options) {
    options=options || {};
    var width=options.width||300;
    var height=options.width||200;
    var prefix=options.width||"ocl";
    var diaIDs = this.getDiastereotopicAtomIDs();
    var svg=this.toSVG(width, height, prefix);

    svg=svg.replace(/Atom:[0-9]+\"/g,function(value) {
        var atom=value.replace(/[^0-9]/g,'');
        return value+' data-atomid="'+diaIDs[atom]+'"';
    });

    return svg;
}