'use strict';

module.exports = function getGroupedDiastereotopicAtomIDs(options = {}) {
    var label = options.atomLabel;

    var diaIDs = this.getDiastereotopicAtomIDs(options);
    var diaIDsObject = {};

    for (var i = 0; i < diaIDs.length; i++) {
        if (!label || this.getAtomLabel(i) === label) {
            var diaID = diaIDs[i];
            if (!diaIDsObject[diaID]) {
                diaIDsObject[diaID] = {
                    counter: 1,
                    atoms: [i],
                    oclID: diaID,
                    atomLabel: this.getAtomLabel(i),
                    _highlight: [diaID]
                };
            } else {
                diaIDsObject[diaID].counter++;
                diaIDsObject[diaID].atoms.push(i);
            }
        }
    }

    var diaIDsTable = [];
    for (var key of Object.keys(diaIDsObject)) {
        diaIDsTable.push(diaIDsObject[key]);
    }
    return diaIDsTable;
};
