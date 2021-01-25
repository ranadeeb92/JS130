// PEDAC
// understand the problem
// -> create a clock that is independent of date
// -> We should be able to add and subtract minutes from the time
// -> Two clock objects that represent the same time 
//     should be equal to each other
// -> We should not use built-in date or time functionality

// Examples/ test cases
// Clock.at(8) => create clock object that represent as 8:00 string
//   => this object has toString, add, subtract methods

// Data structure
// each clock object has hour and minutes
// string to represent the time

// Algorithm
// at() static method
// => take one or two arguments (hour, minutes)
//    -> create a clock object 
// add() instance method
// -> add mintues to the clock
// -> convert hour to minutes : multipley hour by 60
// -> add all minutes together inculding the input minutes
// -> convert back the minutes to represet the time as hour and minutes
//    hour = floor(totalOfMinutes / 60) 
//    minutes = totalOfMinutes % 60
// subtract() instance method
// -> subtract minutes from the clock

// Code

class Clock{
  constructor(hour, minutes) {
    this.hour = hour;
    this.minutes = minutes;
  }
  static MINUTES_PER_DAY = 1440;
  static MINUTES_PER_HOUR = 60;

  static at(InputHour, InputMinutes = 0) {
    return new Clock(InputHour, InputMinutes);
  }

  convertHourToMinutes(hour) {
    return hour * Clock.MINUTES_PER_HOUR;
  }

  convertMinutesToHour(minutes) {
    return Math.floor(minutes / Clock.MINUTES_PER_HOUR);
  }
  getRemainingMinute(minutes) {
    return minutes % Clock.MINUTES_PER_HOUR;
  }

  
  add(minutes) {
    let totalMinutes = minutes + this.minutes + this.convertHourToMinutes(this.hour);
    totalMinutes = totalMinutes % Clock.MINUTES_PER_DAY;
    this.hour = this.convertMinutesToHour(totalMinutes);
    this.minutes = this.getRemainingMinute(totalMinutes);
    return this;
  }

  subtract(mintues) {
    let totalMinutes = (this.minutes + this.convertHourToMinutes(this.hour)) - mintues;
    totalMinutes = totalMinutes % Clock.MINUTES_PER_DAY;
    if(totalMinutes < 0) totalMinutes += Clock.MINUTES_PER_DAY;
    this.hour = this.convertMinutesToHour(totalMinutes);
    this.minutes = this.getRemainingMinute(totalMinutes);
    return this;
  }
  toString() {
    let hourStr = this.hour < 10? `0${this.hour}` : `${this.hour}`;
    let minutesStr = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
    return hourStr + ':' + minutesStr;
  }
  isEqual(clockObj) {
    return this.hour === clockObj.hour && this.minutes === clockObj.minutes;
  }
}


module.exports = Clock;