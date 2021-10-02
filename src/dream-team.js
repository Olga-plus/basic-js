import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam() => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let createName;

  // for (let i = 0; i < members.length; i++) {
  //   createName = members.filter(el => typeof el === 'string' && parseFloat(el)!= NaN);
  //   return createName.map(el => el.trim()).map(el => el[0]).sort().join('').toUpperCase();
  //   }
  try {
    if (parseFloat(members) === NaN || typeof members === 'number') {
      return false;
    }
  return members.filter(el => typeof el === 'string' && parseFloat(el)!= NaN || null || undefined || false || true).map(el => el.trim()).map(el => el[0].toUpperCase()).sort().join('');
  
  } catch (err) {
    return false;
  }}
