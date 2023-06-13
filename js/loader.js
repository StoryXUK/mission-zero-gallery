// Function to calculate the remaining days
function getRemainingDays() {
	var currentDate = new Date();
	var targetDate = new Date('2030-01-01');
	var timeDifference = targetDate.getTime() - currentDate.getTime();
	var remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
	return remainingDays;
  }

  // Function to update countdown and redirect
  function updateCountdown() {
	var countdownElement = document.getElementById('countdown');
	var firstPageElement = document.getElementById('first-page');
	var remainingDays = getRemainingDays();

	if (remainingDays > 0) {
	  countdownElement.textContent = 'Countdown: ' + remainingDays + ' days';
	  setTimeout(updateCountdown, 1000);
	} else {
	  // Hide the preloader and show the first webpage content
	  var preloaderElement = document.getElementById('preloader');
	  preloaderElement.style.display = 'none';
	  firstPageElement.style.display = 'block';
	  
	  // Redirect to the first webpage after a short delay (2 seconds)
	  setTimeout(function() {
		window.location.href = 'path/to/first-page.html';
	  }, 2000);
	}
  }

  // Call the updateCountdown function when the DOM is loaded
  window.addEventListener('DOMContentLoaded', function() {
	updateCountdown();
  });