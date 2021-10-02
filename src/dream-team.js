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
 * createDreamTeam(['Matt', 'Ann', 'Dmitri', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let createName = [];
  for (let i = 0; i < members.length; i++) {
    if(typeof members[i] === 'string') {
      createName.push(members[i].trim());
    }
  }
 createName = members.sort().map(el => el[1]).join('').toUpperCase();
  return createName;
}
