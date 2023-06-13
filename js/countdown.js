 // Function to calculate the remaining days
 function getRemainingDays() {
    var currentDate = new Date();
    var targetDate = new Date('2030-01-01');
    var timeDifference = targetDate.getTime() - currentDate.getTime();
    var remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return remainingDays;
  }

  // Function to update countdown
  function updateCountdown() {
    var countdownElement = document.getElementById('countdown');
    var remainingDays = getRemainingDays();

    if (remainingDays > 0) {
      countdownElement.textContent = 'Countdown: ' + remainingDays + ' days';
      setTimeout(updateCountdown, 1000);
    } else {
      countdownElement.textContent = '';
    }
  }

  // Call the updateCountdown function when the DOM is loaded
  window.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
  });