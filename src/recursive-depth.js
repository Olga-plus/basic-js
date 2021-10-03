import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let count = 1; 
    if (arr.some(item => Array.isArray(item))) {
      const newArr = arr.reduce((accum, current) => accum.concat(current), []);
      return count + this.calculateDepth(newArr);
    }
   return count;
  // const recursion = array => { 
  //   count += arr.length; 
  // for ( let i of array ) { 
  //   if ( Array.isArray(i) ){ 
  //     recursion(i); 
  //   } } } 
  // recursion(arr); 
  // return count;
  // }
}}
