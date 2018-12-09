import { PRODUCT } from 'react-native-dotenv';

import products from '../../products.json';

console.log('Current product', PRODUCT);

/**
 * Get current product
 * @returns {*}
 */
export default products[PRODUCT];
