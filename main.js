const _ = require('lodash') //require do package lodash. Como o instalamos podemos usar as dependencias

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

