import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');

    // if(date instanceof Date) {
    //    if (Object.prototype.toString(data) !== '[object Date') throw new Error ('Unable to determine the time of year!');
       
    //    const month = date.getMonth();

    //    switch(month) {
    //      case 11:
    //      case 0:
    //      case 1:
    //        return 'winter';

    //       case 2:
    //       case 3:
    //       case 4:
    //         return 'spring';

    //         case 5:
    //         case 6:
    //         case 7:
    //           return 'summer';
     
    //       case 8:
    //       case 9:
    //       case 10:
    //          return 'autumn';
    //    }

    // }

    // throw new Error('Wrong ar')

  try {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return 'Unable to determine the time of year!';
    }
    
    let month = date.getMonth();
    

    if (month < 0 ){
      return 'winter';
    }
    if (month < 2 && month === 11) {
      return'winter';
    }
    if (month < 5 && month > 1) {
      return 'spring';
    }
    if (month < 8 && month > 4) {
      return 'summer';
    }
  
    if (month < 11 && month > 7) {
      return 'autumn';
    }
  
  } catch (err) {
    return 'Unable to determine the time of year!';
  }
 
}
