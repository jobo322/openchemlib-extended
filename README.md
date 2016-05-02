# openchemlib-extended

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

Openchemlib extended

## DB



## RXN

Create an instance of the RXN object based on a text file in RXN format. This will also calculate for each reagent and product:
* SMILES
* Molecular formula
* Molecular weight
* idCode

```
var rxn = new RXN(rxnFile)
```

methods on rxn:
* addReagent(molfile)
* addProduct(molfile)
* toRXN() : create a new RXN file


## Molecule extension

### getGroupedDiastereotopicAtomIDs()

Return an array containing the all the different diastereotopic atoms in the molecule with the occurence of each of them.
It may be usefull to first create the implicite hydrogens before using the method ``Molecule.addImplicitHydrogens()```.


## License

  [BSD-3-Clause](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/openchemlib-extended.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/openchemlib-extended
[travis-image]: https://img.shields.io/travis/cheminfo-js/openchemlib-extended/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/openchemlib-extended
[david-image]: https://img.shields.io/david/cheminfo-js/openchemlib-extended.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo-js/openchemlib-extended
[download-image]: https://img.shields.io/npm/dm/openchemlib-extended.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/openchemlib-extended
