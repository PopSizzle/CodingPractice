// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.

var reformatDate = function(date) {
    
  let split = date.split(' ');
  
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",        "Dec"]
  
  let day = parseInt(split[0]);
  
  if(day < 10) day = '0' + day;
  
  let month = months.indexOf(split[1]) + 1;
  
  if(month < 10) month = '0' + month;
  
  let year = split[2];
  
  return year + "-" + month + "-" + day
  
};