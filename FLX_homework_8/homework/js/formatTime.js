function formatTime(num) {
    let timeDays = Math.floor(num / 1440);
    let timeHours = Math.floor((num % 1440) / 60);
    let timeMimutes = num % 60;
    let formatted = timeDays + " day(s) " + timeHours + " hour(s) " + timeMimutes + " minute(s)."
    return formatted;
  }
  
formatTime(120);
formatTime(59);
formatTime(3601);