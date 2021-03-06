'use strict';

module.exports = function toVisualizerMolfile(options = {}) {
    var diastereotopic = options.diastereotopic;

    var highlight = [];
    var atoms = {};
    if (diastereotopic) {
        var heavyAtomHydrogen = options.heavyAtomHydrogen;
        var hydrogenInfo = {};
        this.getExtendedDiastereotopicAtomIDs().forEach(function (line) {
            hydrogenInfo[line.oclID] = line;
        });

        var diaIDs = this.getGroupedDiastereotopicAtomIDs();
        diaIDs.forEach(function (diaID) {
            atoms[diaID.oclID] = diaID.atoms;
            highlight.push(diaID.oclID);
            if (heavyAtomHydrogen) {
                if (hydrogenInfo[diaID.oclID] && hydrogenInfo[diaID.oclID].nbHydrogens > 0) {
                    hydrogenInfo[diaID.oclID].hydrogenOCLIDs.forEach(function (id) {
                        highlight.push(id);
                        atoms[id] = diaID.atoms;
                    });

                }
            }
        });
    } else {
        var size = this.getAllAtoms();
        highlight = (new Array(size)).fill(0).map((a, index) => index);
        atoms = highlight.map((a) => [a]);
    }


    var molfile = {
        type: 'mol2d',
        value: this.toMolfile(),
        _highlight: highlight,
        _atoms: atoms
    };

    return molfile;
};
