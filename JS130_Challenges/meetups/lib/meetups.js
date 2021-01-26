// PEDAC
// understand the problem
// We need to construct objects that represent a meetup date.
// Each object takes a month number (1-12) and a year (e.g., 2021).
// our object should be able to determine the exact date of the meeting.

const { METHODS } = require("http");

// Examples / test cases
// if you ask for the "2nd Wednesday of May 2021", 
// the object should be able to determine that:
//   -> the meetup for that month will occur on the "12th of May, 2021".
// The descriptors that may be given are strings: 
//  -> 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'.
// The days of the week are given by the strings :
//  -> 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'
// The letters case are not important : 'second' === 'SeConD'


// Data structure
// string to represent the date
// numbers to represent the month and year
// object to represent the meetup that has day, month, year

// Algorithm
// constructor 
//  -> It takes to arguments: year and month(between 1-12)
//       -> to creates meetup object
//        -> add month 
// day instance method
//  -> to determine the exact date of the meeting
// toString instance method
//  -> returns the meetup's date represented as string

// Code
class Meetup {
  static MONTHSOF30DAYS = [9, 4, 6, 11];
  static DAYSOFTHEWEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  constructor(year, month) {
    this.month = month;
    this.year = year;
    this.date = new Date(year, month - 1);
  }

  getStartingDate(firstDay, askedDay) {
    let diff = (askedDay - firstDay);
    if(diff === 0) {
       return 1;
    }else if(diff > 0){
      return diff + 1;
    } else {
      return (7 + diff) + 1
    }
  }


  isLeapYear() {
    if (this.year < 1752 && this.year % 4 === 0) {
      return true;
    } else if (this.year % 400 === 0) {
      return true;
    } else if (this.year % 100 === 0) {
      return false;
    } else {
      return this.year % 4 === 0;
    }
  }
  
  monthlength() {
    if(Meetup.MONTHSOF30DAYS.includes(this.month - 1)) {
      return 30;
    } else if((this.month - 1) === 1) {
      return this.isLeapYear() ? 29 : 28;
    }else {
      return 31;
    }
  }

  getTheExactDate(firstDate, addedWeeks) {
    return this.date.setDate(firstDate + (7*addedWeeks));
  } 

  day(weekDay, descriptor) {
    weekDay = weekDay[0].toUpperCase() + weekDay.slice(1).toLowerCase();
    descriptor = descriptor.toLowerCase();
    // get the first day of the month
    let firstDay = this.date.getDay(); // returns number between 0-6
    let askedDay = Meetup.DAYSOFTHEWEEK.indexOf(weekDay);
   
    let firstDateOfTheAskedDay = this.getStartingDate(firstDay, askedDay);
    
    switch(descriptor) {
      case 'first' :
         this.getTheExactDate(firstDateOfTheAskedDay, 0);
         break;
      case 'second' :
         this.getTheExactDate(firstDateOfTheAskedDay, 1);
         break;
      case 'third' :
         this.getTheExactDate(firstDateOfTheAskedDay, 2);
         break;
      case 'fourth' :
         this.getTheExactDate(firstDateOfTheAskedDay, 3);
         break;
      case 'fifth' :
        if((firstDateOfTheAskedDay + (7*4)) > this.monthlength()){
          return null;
        } else {
          this.getTheExactDate(firstDateOfTheAskedDay, 4);
        }
        break;
      case 'last' :
        if((firstDateOfTheAskedDay + (7*4)) > this.monthlength()){
          this.getTheExactDate(firstDateOfTheAskedDay, 3);
        } else {
          this.getTheExactDate(firstDateOfTheAskedDay, 4);
        }
        break;
      case 'teenth' :
        let teenth = firstDateOfTheAskedDay + (7*1);
        if(teenth >= 13 && teenth <= 19){
          this.getTheExactDate(firstDateOfTheAskedDay, 1);
        } else {
          this.getTheExactDate(firstDateOfTheAskedDay, 2);
        }
        break;
    }

    return this.date;
    

  }


}

module.exports = Meetup;

// let meet = new Meetup(2021, 1);
// console.log(meet.day('tuesday', 'teenth').toString());
