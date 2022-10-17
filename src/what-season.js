const { NotImplementedError } = require('../extensions/index.js');

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

function getSeason(date) {
  let winter = ['01', '02', '12'];
  let spring = ['03', '04', '05'];
  let summer = ['06', '07', '08'];
  let autumn = ['09', '10', '11'];

  let resultMonth;
  let stringDate = date.toLocaleDateString();
  let month = stringDate.substring(3, 5);
  console.log(month);
  console.log(stringDate);
  console.log(date);


  if (winter.includes(month)) {
    resultMonth = 'winter';
  } else if (spring.includes(month)) {
    resultMonth = 'spring';
  } else if (summer.includes(month)) {
    resultMonth = 'summer';
  } else if (autumn.includes(month)) {
    resultMonth = 'autumn';
  }

  return resultMonth;
}

module.exports = {
  getSeason
};
